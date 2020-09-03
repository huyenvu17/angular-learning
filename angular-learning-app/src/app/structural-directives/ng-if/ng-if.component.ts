import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {
  status = true;
  statusLogin = true;
  constructor() { }

  ngOnInit(): void {
  }
  show(){
    this.status = true
  }
  hidden(){
    this.status = false;
  }
  dangNhap(){
    this.statusLogin = true;
  }
  dangXuat(){
    this.statusLogin = false;
  }
}
