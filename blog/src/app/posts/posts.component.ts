import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/posts.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  private posts: Post [];
  
  
  constructor(private postsService: PostsService) { 

  }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
  }

  public deletePost(post:Post)
  {
  return  this.postsService.deletePost(post)
    .subscribe((post:Post) => {
      this.posts.splice(this.posts.indexOf(post),1);    
    });
  }

   public preview(post){
    alert(`
    Title: ${post.title}, 
    Text: ${post.text},
    Date: ${post.created_at},
    `);
  }

}

