import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { PostComponent } from '../../components/post/post.component';
import { TweetComponent } from '../../components/tweet/tweet.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    PostComponent,
    TweetComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
