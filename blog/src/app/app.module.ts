import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './service/posts.service';
import { SinglePostComponent } from './posts/single-post/single-post.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PostsComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
