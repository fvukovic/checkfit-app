import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TranslateService} from  '@ngx-translate/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute,
    private translate: TranslateService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  changeLanguageToGerman(){
    this.translate.use('de');
  }

  changeLanguageToEnglish(){
    this.translate.use('en');
  }
}
