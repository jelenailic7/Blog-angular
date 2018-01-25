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
import { PostRowComponent } from './posts/post-row/post-row.component';
import { PageTitleService } from './service/page-title.service';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PostsComponent,
    SinglePostComponent,
    PostFormComponent,
    CommentFormComponent,
    PostRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [PostsService, PageTitleService,
    {provide: 'APP_CONFIG_DEFAULT_TITLE', useValue: "Blog"}   //useValue is just the value that is injected as is
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
