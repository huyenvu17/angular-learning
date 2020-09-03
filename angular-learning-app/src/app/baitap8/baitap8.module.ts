import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap8Component } from './baitap8.component';
import { DanhSachDatComponent } from './danh-sach-dat/danh-sach-dat.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { GheComponent } from './ghe/ghe.component';



@NgModule({
  declarations: [Baitap8Component, DanhSachDatComponent, DanhSachGheComponent, GheComponent],
  imports: [
    CommonModule
  ],
  exports: [Baitap8Component]
})
export class Baitap8Module { }
