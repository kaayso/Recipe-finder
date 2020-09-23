import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRecipeComponent } from './set-recipe.component';

describe('SetRecipeComponent', () => {
  let component: SetRecipeComponent;
  let fixture: ComponentFixture<SetRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
