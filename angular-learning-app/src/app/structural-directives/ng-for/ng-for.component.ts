import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
  danhSachNhanVien = [
    {ten: 'Nguyen Van A', tuoi: 20},
    {ten: 'Nguyen Van B', tuoi: 26},
    {ten: 'Nguyen Van C', tuoi: 18},
    {ten: 'Nguyen Van D', tuoi: 22}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  
}
