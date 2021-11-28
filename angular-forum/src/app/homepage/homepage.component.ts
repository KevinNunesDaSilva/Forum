import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Post } from '../post';
import { PostService } from '../post.service';

import { Category } from '../category';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {
  posts: Post[] = [];
  categories: Category[] = [];
  constructor(private postService: PostService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getPosts();
    this.getCategories();
  }
  getPosts(): void {
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts);
  }
  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }
}
