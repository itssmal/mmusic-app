import { Component, OnInit } from '@angular/core';
import {AuthService} from "../core/services/auth.service";
import {Storage} from "@ionic/storage";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {


  constructor(private authService: AuthService,
              private storage: Storage) { }

  ngOnInit() {
    this.auth()
  }

  auth() {
    this.authService.auth().subscribe(res => {
      this.storage.set('access_token', res.access_token)
    })
  }
}
