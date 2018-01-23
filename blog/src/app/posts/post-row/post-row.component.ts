import { Component, Input, EventEmitter, Output, SimpleChange } from '@angular/core';
import { Post } from '../../models/post';


@Component ({
    selector:'[postRow]',
    templateUrl:'post-row.component.html'
})

export class PostRowComponent {
    private post: Post;
    private oldIndex:number;

@Input() set postRow(post: Post) {
    this.post = post;
}

@Output() onDelete = new EventEmitter<Post>();
@Output() onPreview = new EventEmitter<Post>();

constructor() {

}

deletePost(post:Post) {
    this.onDelete.emit(post);
}
preview(post: Post) {
    this.onPreview.emit(post);
} 



}