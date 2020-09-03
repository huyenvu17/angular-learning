import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.scss']
})
export class PhimComponent implements OnInit {
  @Input() chiTietPhim:any;
  //EventEmitter dùng để giả lập 1 sự kiện
  @Output() chonPhim = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  xemChiTietPhim(){
    // dùng emit để kích hoạt sự kiện và truyền value
    // emit chỉ cho nhận duy nhất 1 param
    this.chonPhim.emit(this.chiTietPhim); 
  }
}
