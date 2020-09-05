import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  Input,
  SimpleChanges,
} from '@angular/core';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Recipe } from 'src/app/interfaces/recipe';

@Component({
  selector: 'app-virtual-scroll-component',
  templateUrl: './virtual-scroll-component.component.html',
  styleUrls: ['./virtual-scroll-component.component.scss'],
})
export class VirtualScrollComponentComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('virtualTable', { static: false })
  nzTableComponent?: NzTableComponent<Recipe>;
  @Input() data: Recipe[];
  private destroy$ = new Subject();
  listOfData: Recipe[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.listOfData = this.data;
    }
  }

  trackByIndex(_: number, data: Recipe): number {
    return Number(data._id);
  }

  ngAfterViewInit(): void {
    this.nzTableComponent?.cdkVirtualScrollViewport?.scrolledIndexChange.pipe(
      takeUntil(this.destroy$)
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
