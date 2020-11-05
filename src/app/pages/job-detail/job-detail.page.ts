import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.page.html',
  styleUrls: ['./job-detail.page.scss'],
})
export class JobDetailPage implements OnInit {
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    speed: 2000,
  };

  commentForm;
  newCommentRating: number = 0;

  constructor(
    public translate: TranslateService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.commentForm = new FormGroup({
      rating: new FormControl(0)
    });

    this.commentForm.rating = 0;
  }

  setRating(grade){
    this.newCommentRating = grade;
    this.commentForm.rating = grade;
  }
}
