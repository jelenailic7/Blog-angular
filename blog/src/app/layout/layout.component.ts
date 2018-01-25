import { Component, OnInit, Inject } from '@angular/core';
import { PageTitleService } from '../service/page-title.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  private title : string;

  constructor(private pageTitleService: PageTitleService,
  			  @Inject('APP_CONFIG_DEFAULT_TITLE') private defaultTitle: string) {
  	pageTitleService.pageTitleAnnounced$.subscribe(
      title => {
        this.title = title; 
      });
  }

  ngOnInit() {
  }

}
