import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public af:AngularFire,
    public flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  login(){
    this.af.auth.login();
  }

  logout(){
    this.af.auth.logout();
    this.flashMessage.show('you are logged out', 
    {cssClass: 'alert-success', timeout: 3000 });
  }

}
