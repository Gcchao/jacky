import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  constructor(
    public af:AngularFire,
    public flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {}
  login(){
    this.af.auth.login();
  }

}
