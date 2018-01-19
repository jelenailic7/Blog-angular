import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { SinglePostComponent } from './posts/single-post/single-post.component';



const appRoutes: Routes = [
    {
      path: '',
      redirectTo: '/posts',
      pathMatch: 'full'
    },
    {
      path: 'posts',
      component: PostsComponent
    },
    {
      path: 'posts/:id',
      component: SinglePostComponent
    }
   
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}