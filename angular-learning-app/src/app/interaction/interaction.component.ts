import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {DanhSachPhimComponent} from './danh-sach-phim/danh-sach-phim.component';
@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {
  @ViewChild(DanhSachPhimComponent, {static: true}) dspComponent:DanhSachPhimComponent;
  @ViewChild('tenPhim', {static: true}) inputTenPhim:ElementRef<HTMLInputElement>;
  constructor() { }

  ngOnInit(): void {
  }
  themPhim(tenPhim:string, gia:number, hinhAnh:string){
    this.dspComponent.danhSachPhim.push({tenPhim, gia, hinhAnh});
    console.log(this.inputTenPhim);
    //localStorage.setItem('danhSachPhim', JSON.stringify(this.dspComponent));
  }
}
