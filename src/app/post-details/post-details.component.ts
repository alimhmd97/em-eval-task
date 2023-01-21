import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IComment, IPost } from '../interfaces/interfaces';
import { PostDetailsService } from './post-details.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  public postId: number = 0;
  public post: IPost | undefined;
  public comments: IComment[] = [];
  // ------------------------------------------------------------------------------------------------
  constructor(private postDetailsSvc: PostDetailsService, private route: ActivatedRoute) {
    // this.postId
    this.route.queryParams.subscribe((params) => {
      this.post = params['postId']

    })
  };
  // ------------------------------------------------------------------------------------------------
  ngOnInit(): void {
    this.getComments()
    this.getPost()
  };
  // ------------------------------------------------------------------------------------------------
  public getPost(): void {
    this.postDetailsSvc.fetchPost(this.postId).subscribe(post => {
      this.post = post;

    })
  };
  // ------------------------------------------------------------------------------------------------
  public getComments(): void {
    this.postDetailsSvc.fetchComments(this.postId).subscribe(comments => {
      this.comments = comments;
    })

  };

  // ------------------------------------------------------------------------------------------------

}
