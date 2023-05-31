import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models/post.interface';
import { PostService } from '../post.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {

  posts!:Post[];

  constructor(private postsSrv: PostService) {
    this.postsSrv.getPosts().then((dati)=>{
      this.posts = dati;
      console.log(this.posts);
    })
   }

  ngOnInit(): void {
  }

}
