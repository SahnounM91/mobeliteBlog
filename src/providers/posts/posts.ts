import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLS } from '../urls/postUrls';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class PostsProvider {

  constructor(public http: HttpClient) {
  }

  getPosts(){
    return Observable.create(observer => {
      this.http.get(URLS.POSTS).subscribe(data => {
        observer.next(data)
      }, err =>{
        console.log(err);
      });
    });
  }

  getPostByID(id){
    return Observable.create(observer => {
      this.http.get(URLS.POSTS + "/" + id).subscribe(data => {
        observer.next(data)
      }, err =>{
        console.log(err);
      });
    });
  }

  getComments(id){
    return Observable.create(observer => {
      this.http.get(URLS.POSTS + "/" + id + "/comments").subscribe(data => {
        observer.next(data)
        console.log(data)
      }, err =>{
        console.log(err)
      });
    });
  }

}
