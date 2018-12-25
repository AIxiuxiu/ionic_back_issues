import { Component, ViewChild } from '@angular/core';

import { Platform, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  @ViewChild(IonRouterOutlet)
  private routerOutlet: IonRouterOutlet;
  private canGoBack = true;

  constructor( private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.fixBack();
    });
  }

  fixBack() {
    const that = this;
    this.routerOutlet.activateEvents.subscribe(() => this.canGoBack = true);
    this.routerOutlet.deactivateEvents.subscribe(() => this.canGoBack = false);
    IonRouterOutlet.prototype.canGoBack = function (deep, stackId) {
      if (!that.canGoBack) { return false; }
      if (deep === void 0) { deep = 1; }
      return this.stackCtrl.canGoBack(deep, stackId);
    };
  }
}
