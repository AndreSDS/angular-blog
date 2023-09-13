import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
    alert(this.postInput.value);
  }
}
