import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable()
export class PostsService {

constructor() { }

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
    id:1,
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
    return this.getPosts().find(post =>  post['id'] == id );
  }
}

