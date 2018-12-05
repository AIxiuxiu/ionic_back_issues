import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-me',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss'],
})
export class MePage implements OnInit, AfterViewInit, OnDestroy {

  disabled = true;
  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.disabled = false;
  }

  back() {
    // this.navCtrl.goBack();
    this.router.navigateByUrl('/home');
  }

  ngOnDestroy(): void {
    console.error('OnDestroy');

  }
}
