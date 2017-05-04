import { Injectable } from '@angular/core';
import { ApiService } from './api';
import 'rxjs/Rx';

@Injectable()
export class CommentsService {
  path: string = '/comments';
  constructor(private apiService: ApiService) {}

  createNote(comments) {
    return this.apiService.post(this.path, comments)
  }

  getNotes() {
    return this.apiService.get(this.path)
  }

  completeNote(comments) {
    return this.apiService.delete(`${this.path}/${comments.id}`)
  }
}
