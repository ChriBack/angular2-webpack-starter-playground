import { Component, OnInit } from '@angular/core';
import { PostService } from './postsService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'posts',
  styles: [`
    .notes {
      padding-top: 50px;
    }
    .creator {
      margin-bottom: 40px;
    }
  `],
  template: `
    <div class="row center-xs notes">
      <div class="notes col-xs-8">
        <div class="row between-xs">

          <post-card
            class="col-xs-4"
            [post]="post"
            [index]="i"
            *ngFor="let post of posts; let i = index"
          >
          </post-card>
        </div>
      </div>
    </div>
    <div class="clearfix" style="clear:both;"></div>
  `
})
export class Posts implements OnInit {
  posts = []

  constructor(
    private postService: PostService,
    public route: ActivatedRoute) {

  }

  public ngOnInit() {
    this.postService.getPosts()
      .subscribe(res => this.posts = res);
  }


  public onCreateNote(post) {
    this.postService.createPost(post)
      .subscribe(post => this.posts.push(post));
  }
}
