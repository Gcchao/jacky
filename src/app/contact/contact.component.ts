import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  AddTable: Boolean = false;

  constructor() { 
    this.AddTable = false;
  }

  ngOnInit() {
  }

  fillform(){
      this.AddTable = !this.AddTable;
  }
}
