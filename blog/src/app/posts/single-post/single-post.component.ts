import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostsService } from '../../service/posts.service';
import { Post } from '../../models/post';
import { PageTitleService } from '../../service/page-title.service';


@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

private post:Post;


  constructor(private postsService: PostsService,
     private route: ActivatedRoute,
     private pageTitleService: PageTitleService) {}

  ngOnInit() {
   
    this.route.params.subscribe((params: Params) => {
      this.post = this.postsService.getPostById(params["id"]);
      this.pageTitleService.setTitle("Single post " + this.post.id);
    });
  }
  
  getSubmitComment(comment) {
  this.postsService.addComment(this.post.id, comment);
    
  }  
ngOnDestroy() 
{
  this.pageTitleService.setTitle('');
}
}
