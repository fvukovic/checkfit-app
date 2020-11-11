import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { injectStyles } from 'shadow-dom-inject-styles';
import { TranslateService } from '@ngx-translate/core';
import { Plugins } from '@capacitor/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { StorageService } from './services/storage.service';

const { App } = Plugins;

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
      url: '/registration',
      icon: 'enter',
    },
    {
      title: 'navigation.login',
      url: '/login',
      icon: 'log-in',
    },
    {
      title: 'navigation.logout',
      url: '',
      icon: 'log-out',
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public translate: TranslateService,
    private location: Location,
    private router: Router,
    private storage: StorageService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('de');

    if (this.translate.currentLang == undefined) {
      this.storage.getString('lang').then((data: any) => {
        if (data.value) {
          this.translate.use(data.value);
        } else {
          this.translate.use('de');
          this.storage.setString('lang', this.translate.currentLang);
        }
      });
    }

    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (this.router.url == '/home') {
        App.exitApp();
      } else {
        this.location.back();
      }
    });
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

  changeLanguageToGerman() {
    this.translate.use('de');
    this.storage.setString('lang', 'de');
  }

  changeLanguageToEnglish() {
    this.translate.use('en');
    this.storage.setString('lang', 'en');
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
