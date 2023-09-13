import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  postMaxLength: number = 240;
  postRemains: number = this.postMaxLength;
  postInput !: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService
  ) {
    this.postInput = this.formBuilder.control({
      value: '',
      disabled: false
    });
  }

  setPostRemains() {
    this.postRemains = this.postMaxLength - this.postInput.value.length;
  }

  sendPost() {
    this.postService.addPost(this.postInput.value);
    this.postInput.setValue('');
    this.postRemains = this.postMaxLength;
  }
}
