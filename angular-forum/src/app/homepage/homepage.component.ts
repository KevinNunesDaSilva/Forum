import { Component, OnInit } from '@angular/core';

import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts(): void {
    this.postService.getPosts()
    .subscribe(posts => this.posts = posts);
  }
}
