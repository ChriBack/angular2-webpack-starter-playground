import { Injectable } from '@angular/core';
import { ApiService } from '../comments/api';
import 'rxjs/Rx';

@Injectable()
export class PostService {
  path: string = '/posts';
  constructor(private apiService: ApiService) {}

  createPost(post) {
    return this.apiService.post(this.path, post)
  }

  getPosts() {
    return this.apiService.get(this.path)
  }

  completePost(post) {
    return this.apiService.delete(`${this.path}/${post.id}`)
  }
}
