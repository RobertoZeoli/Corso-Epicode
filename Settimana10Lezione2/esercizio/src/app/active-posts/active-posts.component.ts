import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models/post.interface';
import { PostService } from '../post.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent implements OnInit {

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
