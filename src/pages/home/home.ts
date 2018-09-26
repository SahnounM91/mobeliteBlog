import { Component     } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostsProvider } from '../../providers/posts/posts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tmpPosts: any = [];
  items = [];
  page = 1;
  perPage = 0;
  totalData = 0;
  totalPage = 0;
  posts: any = [];

  constructor(public navCtrl: NavController, public postsProvider: PostsProvider) {
    this.getPosts();
  }

  doInfinite(infiniteScroll) {
    setTimeout (() => {
      this.postsProvider.getPosts().subscribe(data => {
        this.tmpPosts = data
        let result = this.tmpPosts.slice(this.page *5);
        for (let i = 1; i <= this.perPage; i ++) {
            this.posts.push(result[i]);
        }
        console.log(this.posts)
      })
      this.page += 1;
      infiniteScroll.complete ();
    }, 500);
  }

  getPosts() {
    this.postsProvider.getPosts()
    .subscribe(data => {
      this.tmpPosts = data;
      for (let i = 0; i <= 4; i ++) {
        this.posts.push(this.tmpPosts[i]);
      }
      this.perPage = 5;
      this.totalData = this.tmpPosts.length;
      this.totalPage = 5;
    });
  }


  postDetails(id){
    this.navCtrl.push("PostPage", {id: id})
  }

}
