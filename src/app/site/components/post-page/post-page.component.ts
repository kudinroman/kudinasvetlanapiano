import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../../../shared/interfaces";
import { PostsService } from "../../../shared/posts.service";

@Component({
  selector: "app-post-page",
  templateUrl: "./post-page.component.html",
  styleUrls: ["./post-page.component.scss"],
})
export class PostPageComponent implements OnChanges {
  post$: Observable<Post>;
  @Input() currentPostId: string | undefined;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.post$ = null;
  }

  ngOnChanges() {
    this.post$ = this.postsService.getById(this.currentPostId);
  }
}
