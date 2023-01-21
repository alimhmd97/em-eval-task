import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {

  constructor(private http: HttpClient) { }
  fetchPosts():Observable<IPost[]>{
    const posts = this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
  return posts
  }
}
