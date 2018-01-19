import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { SinglePostComponent } from './posts/single-post/single-post.component';
import { PostFormComponent } from './posts/post-form/post-form.component';




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
    },
    {
      path: 'add',
      component: PostFormComponent
    },
    {
      path: 'edit/:id',
      component: PostFormComponent
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