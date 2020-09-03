import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-danh-sach-dat',
  templateUrl: './danh-sach-dat.component.html',
  styleUrls: ['./danh-sach-dat.component.scss']
})
export class DanhSachDatComponent implements OnInit {
  danhSachDat:any[] = [];
  @Output() removeGhe = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  xuLyChonGhe(ghe:any){
    if(ghe.trangThaiChon){
      this.danhSachDat.push(ghe);
      
    } else{
      const index = this.danhSachDat.findIndex(item => item.soGhe === ghe.soGhe);
      this.danhSachDat.splice(index, 1);
    }
    console.log(this.danhSachDat);
  }
  huyGhe(soGhe:number){
    const index = this.danhSachDat.findIndex(item => item.soGhe === soGhe);
    this.danhSachDat.splice(index, 1);
    this.removeGhe.emit(soGhe)
  }
}
