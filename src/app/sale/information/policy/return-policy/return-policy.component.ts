import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-return-policy',
  templateUrl: './return-policy.component.html',
  styleUrls: ['./return-policy.component.css']
})
export class ReturnPolicyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(){
    window.scrollTo(0,0);
  }
}
