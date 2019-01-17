import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private url = 'https://reqres.in/api/users?page=2';
  private url = 'https://jsonplaceholder.typicode.com/posts';
  // private url = 'https://jsonplaceholder.typicode.com/photos';

  // for update
  // private url = 'https://reqres.in/api/users/2';

  constructor(private httpClient: HttpClient) { }

  getdata(): Observable<any> {
    return this.httpClient.get<any>(this.url);
  }

  creatPost(post): Observable<any> {
    return this.httpClient.post<any>(this.url, post);
  }

  deletePost(post): Observable<void> {
    console.log(post.id);
    return this.httpClient.delete<void>(this.url + '/' + post.id);
  }

  updatePost(post) {
    return this.httpClient.patch(this.url + '/' + post.id, {
      "name": "morpheus",
      "job": "zion resident"
    });
  }
  updatePut(post) {
    return this.httpClient.put(this.url + '/' + post.id, {
      "name": "morpheus",
      "job": "zion resident"
    });
  }
}
