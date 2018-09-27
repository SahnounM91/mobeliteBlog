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
    //get all posts
    this.getPosts();
  }

  //infinitScroll method
  doInfinite(infiniteScroll) {
    //time for loading the newest data
    setTimeout (() => {
      this.postsProvider.getPosts().subscribe(data => {
        //store data in tmp array
        this.tmpPosts = data

        //add next portion of data to result var
        let result = this.tmpPosts.slice(this.page *5);
        //loop and push the data from result to perpage length post
        for (let i = 1; i <= this.perPage; i ++) {
            this.posts.push(result[i]);
        }
      })
      this.page += 1;
      infiniteScroll.complete ();
    }, 200);
  }


  //get all post from providers
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


  //get post details and show it on new page
  postDetails(id){
    this.navCtrl.push("PostPage", {id: id})
  }

}
