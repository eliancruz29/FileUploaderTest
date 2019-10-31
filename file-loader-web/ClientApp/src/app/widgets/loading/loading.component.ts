import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  host: {
    'class': 'd-flex justify-content-center my-5 py-5',
  }
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
