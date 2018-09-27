import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostsProvider } from '../../providers/posts/posts';


/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  id:number
  post: any = {}
  comments: any  = []
  constructor(public navCtrl: NavController, public navParams: NavParams,public postsProvider: PostsProvider) {
    //pass the id as param to post page
    this.id = navParams.get('id')
    this.getPostDetails(this.id)
    this.getPostComments(this.id)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }

  //get post details by id from api
  getPostDetails(id){
    this.postsProvider.getPostByID(id).subscribe(data => {
      this.post = data
    })
  }


  //get post related comments by id
  getPostComments(id){
    this.postsProvider.getComments(id).subscribe(data => {
      this.comments = data
    })
  }
}
