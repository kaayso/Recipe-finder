import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { VirtualScrollComponentComponent } from './virtual-scroll-component.component';

describe('VirtualScrollComponentComponent', () => {
  let component: VirtualScrollComponentComponent;
  let fixture: ComponentFixture<VirtualScrollComponentComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualScrollComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualScrollComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
