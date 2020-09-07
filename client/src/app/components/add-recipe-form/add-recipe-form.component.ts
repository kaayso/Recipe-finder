import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Ingredient } from 'src/app/interfaces/ingredient';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { GenericService } from '../../services/generic.service';
import { api } from '../../ws/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe-form',
  templateUrl: './add-recipe-form.component.html',
  styleUrls: ['./add-recipe-form.component.scss'],
})
export class AddRecipeFormComponent implements OnInit {
  isVisible = false;
  isOkLoading = false;
  validateForm!: FormGroup;
  ingredientsForm!: FormGroup;
  loading = false;
  avatarUrl?: string;
  recipeImage?: File;
  listOfControl: Array<{
    id: number;
    controlInstance: string;
  }> = [];
  ingsFormIsOK = false;
  @Input() disabled: boolean;
  @Input() userIngredients: Ingredient[];

  constructor(
    private fb: FormBuilder,
    private msg: NzMessageService,
    private genericService: GenericService,
    private router: Router
  ) {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      category: ['plat principal', [Validators.required]],
      timeUnity: ['h', [Validators.required]],
      timeValue: [
        null,
        [Validators.required, Validators.pattern('[+-]?([0-9]*[.])?[0-9]+')],
      ],
      description: ['', []],
      persons: [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
    });

    this.ingredientsForm = this.fb.group({});
  }

  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]) => {
    return new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng =
        file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.msg.error('Seules les images JPG ou PNG sont acceptés!');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error("La taille de l'image doit être inférieur à 2MB!");
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });
  };

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
          this.recipeImage = info.file!.originFileObj!;
        });
        break;
      case 'error':
        this.msg.error('Network error');
        this.loading = false;
        break;
    }
  }

  ngOnInit(): void {}

  private setupFields(): void {
    const currentControls = this.listOfControl.map((c) => c.controlInstance);

    for (let i = 0; i < this.userIngredients.length; i++) {
      const ingredientName = this.userIngredients[i].name;

      if (!currentControls.includes(ingredientName)) {
        const control = {
          id: i,
          controlInstance: ingredientName,
        };
        this.listOfControl.push(control);
        this.ingredientsForm.addControl(
          `${control.controlInstance}-v`,
          new FormControl(null, [
            Validators.required,
            Validators.pattern('[+-]?([0-9]*[.])?[0-9]+'),
          ])
        );
        this.ingredientsForm.addControl(
          `${control.controlInstance}-u`,
          new FormControl('g', Validators.required)
        );
      }
    }

    // clean ingredientsForm and listOfControl => remove deprecated ingredients
    if (this.listOfControl.length !== this.userIngredients.length) {
      const userIngredientsName = this.userIngredients.map((ing) => ing.name);
      let listOfControlClone = [...this.listOfControl];
      // check if there is extra ings in control list
      for (let i = 0; i < this.listOfControl.length; i++) {
        const control = this.listOfControl[i];
        if (!userIngredientsName.includes(control.controlInstance)) {
          // remove item control from listOfControl
          listOfControlClone.splice(listOfControlClone.indexOf(control), 1);
          // remove item from ingredientsForm
          this.ingredientsForm.removeControl(`${control.controlInstance}-v`);
          this.ingredientsForm.removeControl(`${control.controlInstance}-u`);
        }
      }
      this.listOfControl = listOfControlClone;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "userIngredients" changed
    if (changes['userIngredients']) {
      this.setupFields();
      this.ingsFormIsOK = false;
    }
  }

  showModal(): void {
    this.isVisible = true;
  }

  private buildPayload(recipeInfos: any, ingredientsInfos: any): any {
    // Prepare recipeInfos object
    let payload = { ...recipeInfos };
    payload.time = {
      unity: recipeInfos.timeUnity,
      value: recipeInfos.timeValue,
    };
    payload.default = false;
    delete payload.timeUnity;
    delete payload.timeValue;
    // Prepare ingredientsInfos object
    let ingsPayload = [...this.userIngredients];

    for (let ing of ingsPayload) {
      delete ing.category;
      ing.quantity = {
        value: ingredientsInfos[`${ing.name}-v`],
        unity: ingredientsInfos[`${ing.name}-u`],
      };
    }
    // build final payload
    payload.ingredients = ingsPayload;
    return payload;
  }

  handleOk(): void {
    if (this.ingsFormIsOK) {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    } else {
      for (const i in this.ingredientsForm.controls) {
        this.ingredientsForm.controls[i].markAsDirty();
        this.ingredientsForm.controls[i].updateValueAndValidity();
      }
    }

    // Create a recipe
    if (this.validateForm.valid && this.ingredientsForm.valid) {
      this.isOkLoading = true;
      // Prepare payloads
      const payload = this.buildPayload(
        this.validateForm.value,
        this.ingredientsForm.value
      );

      this.genericService.post(api.Recipe, payload).subscribe(
        (res) => {
          console.log(res.message);
          // setting recipe image
          if (this.recipeImage) {
            let formData = new FormData();
            formData.append('recipeImage', this.recipeImage);
            formData.append('recipeId', res.id);

            this.genericService.put(`${api.Recipe}image`, formData).subscribe(
              (res) => console.log(res.message),
              (err) => console.log(err)
            );
          }
          this.msg.success('Recipe added successfully!');
          this.isVisible = false;
          this.isOkLoading = false;
          this.router.navigateByUrl('/recipes');
        },
        (err) => {
          if (err.status === 422) {
            this.msg.error('Formulaire non valide');
          } else {
            this.msg.error('Network error');
          }
          this.isOkLoading = false;
        }
      );
    }
    this.ingsFormIsOK = this.ingredientsForm.valid;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
