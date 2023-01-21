import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IComment, IPost } from '../interfaces/interfaces';
import { Observable ,pipe,tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostDetailsService {

  constructor(private http: HttpClient) { }
  // ----------------------------------------------------------------------------------------------
  fetchPost(id: number): Observable<IPost> {
    
    const post = this.http.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id+1}`);
    return post 
  }
  // ----------------------------------------------------------------------------------------------
  fetchComments(id: number): Observable<IComment[]> {
    const comments = this.http.get<IComment[]>(`https://jsonplaceholder.typicode.com/posts/${id+1}/comments`);
    return comments }

}
