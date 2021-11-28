import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.less']
})
export class PostDetailComponent implements OnInit {
  post: Post | undefined;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.postService.getPost(id)
      .subscribe(post => this.post= post);
  }
  goBack(): void {
    this.location.back();
  }
}
