import { Component, Input, Output, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  host: {
    'class': 'alert alert-dismissible fade show',
    'role': 'alert',
    '[class.alert-danger]': 'isError',
    '[class.alert-success]': '!isError'
  }
})
export class AlertComponent implements OnDestroy {
  @Input() isError: boolean = true;
  @Input() msg: string = '';
  @Output() close = new Subject<void>();

  constructor() { }

  ngOnDestroy() {
    this.close.complete();
  }

  public dismissAlert(): void {
    this.close.next();
  }
}
