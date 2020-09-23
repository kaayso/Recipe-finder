import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {
  @Input() path: string;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToIngredients(): void {
    this.router.navigateByUrl(this.path);
  }
}
