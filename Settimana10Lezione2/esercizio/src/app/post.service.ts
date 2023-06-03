import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[]=[
    {
      id:1,
      body:"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
      title:"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
      active:true,
      type:"news"
  },
  {
      id:2,
      body:"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
      title:"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
      active:true,
      type:"politics"
  },
  {
      id:3,
      body:"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
      title:"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
      active:true,
      type:"educations"
  },
  {
      id:4,
      body:"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
      title:"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
      active:false,
      type:"news"
  },
  {
      id:5,
      body:"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
      title:"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
      active:false,
      type:"politics"
  }
  ]

  constructor() { }

  async getPosts(){
    return (await fetch('assets/db.json')).json();
  }
}