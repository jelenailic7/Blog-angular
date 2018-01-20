import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './service/posts.service';
import { SinglePostComponent } from './posts/single-post/single-post.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { CommentFormComponent } from './comment-form/comment-form.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PostsComponent,
    SinglePostComponent,
    PostFormComponent,
    CommentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
