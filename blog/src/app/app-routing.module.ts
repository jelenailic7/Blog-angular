import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';


const appRoutes: Routes = [
    {
      path: '',
      redirectTo: '/posts',
      pathMatch: 'full'
    },
    {
      path: 'posts',
      component: PostsComponent
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