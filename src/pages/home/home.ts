import { Component     } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostsProvider } from '../../providers/posts/posts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: any;

  constructor(public navCtrl: NavController, public postsProvider: PostsProvider) {
    this.getPosts();
  }

  getPosts() {
    this.postsProvider.getPosts()
    .subscribe(data => {
      this.posts = data;
    });
  }
  postDetails(id){
    this.navCtrl.push("PostPage", {id: id})
  }


}
