import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Category } from '../category';
import { CategoryService } from '../category.service';

import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.less']
})
export class CategoryListComponent implements OnInit {
  category: Category | undefined;
  posts: Post[] = [];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private categoryService: CategoryService,
    private location: Location) { }

  ngOnInit(): void {
    this.getPosts();
    this.getCategory();
  }
  getCategory(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.categoryService.getCategory(id)
      .subscribe(category => this.category= category);
  }
  getPosts(): void {
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts);
  }
}
