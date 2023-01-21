import { Component ,OnInit} from '@angular/core';
import {  Router } from '@angular/router';
import { IPost } from '../interfaces/interfaces';
import { PostsServiceService } from './posts-service.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
public posts:IPost[]|undefined;
// ------------------------------------------------------------------------------------------------
constructor(private postsSvc: PostsServiceService,private router:Router){
}
// ------------------------------------------------------------------------------------------------
ngOnInit(): void {
  this.getPosts()
}
// ------------------------------------------------------------------------------------------------
public getPosts():void{
this.postsSvc.fetchPosts().subscribe(posts =>{this.posts = posts;})
}
// ------------------------------------------------------------------------------------------------
public showPostdetails(id:number):void{
  this.router.navigate(['/post-details'], {queryParams: {postId:id}} );
}
// ------------------------------------------------------------------------------------------------

}
