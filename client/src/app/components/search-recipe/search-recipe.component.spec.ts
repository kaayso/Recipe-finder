import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRecipeComponent } from './search-recipe.component';

describe('SearchRecipeComponent', () => {
  let component: SearchRecipeComponent;
  let fixture: ComponentFixture<SearchRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
