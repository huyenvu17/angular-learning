import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {
  danhSachPhim:any[] = [
    {tenPhim: "Aladin", hinhAnh: 'assets/images/phim1.jpg', gia: 85000},
    {tenPhim: "Doraemon", hinhAnh: 'assets/images/phim2.jpg', gia: 90000},
    {tenPhim: "Detective Conan", hinhAnh: 'assets/images/phim3.jpg', gia: 80000}
  ];
  phimDangChon:any = null;
  constructor() { }

  ngOnInit(): void {
  }
  showChiTiet(chiTietPhim:any){
    this.phimDangChon = chiTietPhim;
    console.log(this.phimDangChon)
  }
}
