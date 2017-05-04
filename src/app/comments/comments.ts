import { Component, OnInit } from '@angular/core';
import { CommentsService } from './commentsService';

@Component({
  selector: 'comments',
  template: `
    <div class="comments-container">

      <div *ngFor="let comment of comments">
      <div>
         {{ comment.name }}
      </div>
      </div>
    </div>
  `
})
export class Comments implements OnInit {
  public comments = [];
  public ngOnInit() {
    console.log('hello `Detail` component');
  }

  constructor(private commentsService: CommentsService) {

    this.commentsService.getNotes()
      .subscribe(res => this.comments = res);
  }

  onCreateNote(comment) {
    this.commentsService.createNote(comment)
      .subscribe(comment => this.comments.push(comment));
  }

  onNoteChecked(comment) {
    this.commentsService.completeNote(comment)
      .subscribe(comment => {
        const i = this.comments.findIndex(localComments => localComments.id === comment.id);
        this.comments.splice(i, 1);
      });
  }
}
