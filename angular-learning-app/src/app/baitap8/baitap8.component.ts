import { Component, OnInit, ViewChild } from '@angular/core';
import {DanhSachDatComponent} from './danh-sach-dat/danh-sach-dat.component';
import {DanhSachGheComponent} from './danh-sach-ghe/danh-sach-ghe.component';
@Component({
  selector: 'app-baitap8',
  templateUrl: './baitap8.component.html',
  styleUrls: ['./baitap8.component.scss']
})
export class Baitap8Component implements OnInit {
  @ViewChild(DanhSachDatComponent, {static: true}) dsdComponent:DanhSachDatComponent;
  @ViewChild(DanhSachGheComponent, {static:true}) dsgComponent:DanhSachGheComponent;
  constructor() { }

  ngOnInit(): void {
  }
  xuLyChonGhe(ghe:any){
    this.dsdComponent.xuLyChonGhe(ghe);
  }
  xuLyHuyGhe(soGhe:any){
    this.dsgComponent.xuLyHuyGhe(soGhe);
  }
}
