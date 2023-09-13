import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@/components/header/header.component';
import { AvatarComponent } from '@/components/avatar/avatar.component';
import { PostComponent } from '@/components/post/post.component';
import { PostItemComponent } from '@/components/post-item/post-item.component';
import { FooterComponent } from '@/components/footer/footer.component';
import { HomeComponent } from './home.component';
import { PostService } from '@/services/post.service';

@NgModule({
  declarations: [
    HomeComponent,
    AvatarComponent,
    HeaderComponent,
    PostComponent,
    PostItemComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [PostService],
})
export class HomeModule { }
