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

  constructor(private postService: PostsService, private router: Router, private route:ActivatedRoute) {
    this.post = new Post({});


  }

  submitPost(post: Post)
  {
    this.postService.addPost(this.post);
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
