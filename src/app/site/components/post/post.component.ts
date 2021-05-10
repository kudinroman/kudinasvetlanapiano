import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Post } from "../../../shared/interfaces";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() choosedPostId = new EventEmitter<string>()
  constructor() {}

  ngOnInit() {}

  choosePost(id: string) {
    this.choosedPostId.emit(id)
  }
}
