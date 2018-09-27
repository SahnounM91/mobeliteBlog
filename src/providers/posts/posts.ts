import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLS } from '../urls/postUrls';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class PostsProvider {

  constructor(public http: HttpClient) {
  }

  //use observable t get posts from api
  getPosts(){
    return Observable.create(observer => {
      this.http.get(URLS.POSTS).subscribe(data => {
        observer.next(data)
      }, err =>{
        console.log(err);
      });
    });
  }

  //use observable to get post details by id from api
  getPostByID(id){
    return Observable.create(observer => {
      this.http.get(URLS.POSTS + "/" + id).subscribe(data => {
        observer.next(data)
      }, err =>{
        console.log(err);
      });
    });
  }

  //get comments of single post from api
  getComments(id){
    return Observable.create(observer => {
      this.http.get(URLS.POSTS + "/" + id + "/comments").subscribe(data => {
        observer.next(data)
      }, err =>{
        console.log(err)
      });
    });
  }

}
