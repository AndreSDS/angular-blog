import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postList$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() { }

  addPost(message: string) {
    this.postList$.next([message, ...this.postList$.value]);
  }

  getPosts() {
    return this.postList$.asObservable();
  }
}
