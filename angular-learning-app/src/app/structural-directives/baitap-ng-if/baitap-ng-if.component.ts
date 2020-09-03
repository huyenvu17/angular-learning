import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-ng-if',
  templateUrl: './baitap-ng-if.component.html',
  styleUrls: ['./baitap-ng-if.component.scss']
})
export class BaitapNgIfComponent implements OnInit {
  name = '';
  isLogin = false;
  constructor() { }

  ngOnInit(): void {
  }
  dangNhap(username, password){
    if(username === 'Cybersoft' && password === 'Cybersoft'){
      this.isLogin = true;
      this.name = username;
      localStorage.setItem('user', JSON.stringify(this.name));
      
    }
  }
}
