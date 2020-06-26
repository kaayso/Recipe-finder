import { Component, OnInit, OnDestroy } from '@angular/core';
import { GenericService } from '../../services/generic.service';
import { api } from '../../ws/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private genericService: GenericService) {}

  ngOnInit(): void {
    // console.log(`${api.User}${this.uid}`);
    // this.genericService.get(`${api.User}${this.uid}`).subscribe(
    //   (res) => {
    //     console.log(res);
    //   },
    //   (err) => {
    //     console.log(err.status);
    //   }
    // );
  }
}
