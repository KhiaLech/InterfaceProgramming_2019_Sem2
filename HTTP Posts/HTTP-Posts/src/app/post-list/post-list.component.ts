import { Component, OnInit } from '@angular/core';
import {Post} from '../post'
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(public postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPost();
  }

}
