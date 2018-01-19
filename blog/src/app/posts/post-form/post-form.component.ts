import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Post } from '../../models/post';
import { PostsService } from '../../service/posts.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Post>();

  private post: Post;

  constructor(private postsService: PostsService, private router: Router, private route:ActivatedRoute) {
    this.post = new Post({});

    this.route.params.subscribe(params =>{
      if(params['id']){
        this.post = this.postsService.getPostById(+params['id']);
      }
})


  }

  submitPost(post: Post)
  {
    if(this.post.id){
      this.postsService.editPost(this.post);
    }else {
    this.postsService.addPost(this.post);
    }
    this.router.navigate(['/posts']);

  }


  public preview(){
    alert(`
    Title: ${this.post.title}, 
    Text: ${this.post.text},
    Date: ${this.post.created_at},
    `);
  }
  ngOnInit() {
  }

}
