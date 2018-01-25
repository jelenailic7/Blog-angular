import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
 
@Injectable()
export class PageTitleService {
 
  private pageTitleSource = new Subject<string>();   //observer and observable
 
  pageTitleAnnounced$ = this.pageTitleSource.asObservable();   
 
  setTitle(title: string) {
    this.pageTitleSource.next(title);  
  }

}
