import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];
  // private url = 'https://jsonplaceholder.typicode.com/posts';
  // private url = 'https://jsonplaceholder.typicode.com/albums';
  // private url = 'https://jsonplaceholder.typicode.com/photos';
  private url = 'https://reqres.in/api/users/2';
  // private url = 'https://reqres.in/api/users?page=2';

  constructor(private http: Http) {
    http.get(this.url)
      .subscribe(response => {
        this.posts.push (response.json());
        console.log(this.posts);
      });
  }
  updatePost(post) {
    this.http.patch(this.url + '/' + post.id, {
      "name": "morpheus",
      "job": "zion resident"
  })
      .subscribe(response => {
        console.log(response.json());
      });
  }

  creatPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post.id = response.json().id;
        this.posts.splice(0, 0, post);
        console.log(response.json());
      });
  } 


  deletePost(post) {
    console.log(post);
    this.http.delete(this.url + '/' + post.id)
      .subscribe(() => {
        let index = this.posts.indexOf(post);
        console.log(index);
        this.posts.splice(index, 1);
        // console.log(this.posts);
      });
  }

  ngOnInit() {
  }
}
