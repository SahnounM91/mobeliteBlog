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
  constructor(public navCtrl: NavController, public navParams: NavParams,public postsProvider: PostsProvider) {
    this.id = navParams.get('id')
    this.getPostDetails(this.id)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }

  getPostDetails(id){
    this.postsProvider.getPostByID(id).subscribe(data => {
      this.post = data
    })
  }
}
