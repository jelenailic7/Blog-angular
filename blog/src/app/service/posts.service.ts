import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable()
export class PostsService {

idCount:number;

constructor() { 
  this.idCount = this.posts.length + 1;
}


private posts : Post [] = [
  {
    id:1,
    title:'Prvi naslov',
    text: 'Ovde ide text za prvi post',
    created_at: '19-01-2018'
  },
  {
    id:2,
    title:'Drugi naslov',
    text: 'Ovde ide text za drugi post',
    created_at: '19-01-2018'
  },
  {
    id:3,
    title:'Treci naslov',
    text: 'Ovde ide text za treci post',
    created_at: '19-01-2018'
  }
];

  public getPosts()
  {
    return this.posts;
  }
  public getPostById(id: number ){
    return this.getPosts().find(post => post['id'] == id );
  }
  public editPost(post: Post)
  {
    this.posts.splice(this.posts.indexOf(post),1,post);
  }
  public deletePost(post: Post)
  {
    this.posts.splice(this.posts.indexOf(post),1);
  }

  public addPost(post: Post)
  {
    console.log(post);
    this.posts.push(new Post({
      id: this.idCount,
      title: post.title,
      text: post.text,
      created_at: post.created_at

    }));
  
  }
}

