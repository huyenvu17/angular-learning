import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
  @Input() ghe:any;
  trangThaiChon:boolean = false;
  @Output() selectGhe = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  chonGhe(){
    this.trangThaiChon = !this.trangThaiChon;
    this.selectGhe.emit({...this.ghe, trangThaiChon: this.trangThaiChon});
  }

}
