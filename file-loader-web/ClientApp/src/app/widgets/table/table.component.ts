import { Component, OnInit, Input } from '@angular/core';
import { IFileTables } from 'src/app/models/file-tables';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data: IFileTables;

  constructor() { }

  ngOnInit() {
  }
}
