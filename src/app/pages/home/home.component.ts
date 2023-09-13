import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  postList: string[] = []
  private postSubscription !: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postSubscription = this.postService.getPosts().subscribe(
      (posts: string[]) => {
        this.postList = posts;
      }
    );
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }

}
