import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { injectStyles } from 'shadow-dom-inject-styles';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'navigation.home',
      url: '/folder/Inbox',
      icon: 'home',
    },
    {
      title: 'navigation.news',
      url: '/folder/Outbox',
      icon: 'newspaper',
    },
    {
      title: 'navigation.registration',
      url: '/folder/Favorites',
      icon: 'enter',
    },
    {
      title: 'navigation.login',
      url: '/folder/Archived',
      icon: 'log-in',
    },
    {
      title: 'navigation.logout',
      url: '',
      icon: 'log-out',
    }
  ];
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.translate.setDefaultLang('de');
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }

    this.setDropdownMenuFullWith();
  }

  setDropdownMenuFullWith() {
    let ionMenu = document.querySelector('ion-app ion-menu ') as HTMLElement;
    // define style tag text
    let styles = `.menu-inner {
      width: 100%!important;
    }`;
    injectStyles(ionMenu, '.menu-inner', styles);
  }
}
