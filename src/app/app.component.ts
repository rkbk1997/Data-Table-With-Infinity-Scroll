import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService} from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private api: ApiService) {}
  show = false;
  filter={};
  allpost;
  notEmptyPost = true;
  notscrolly = true;
  skip = 0
  appdata={
    _id:'',
    App:'',
    Category:'',
    Rating:'',
    Reviews:'',
    Size:'',
    Installs:'',
    Type:'',
    Price:'',
    'Content Rating':'',
    Genres: ''
  };
   ngOnInit() {
     this.loadInitPost();
   }
  applyfilter(key,filtervalue){
    if(filtervalue.length>0)
    {
    document.documentElement.scrollTop = 0;
    this.skip = 0
    this.filter[key]=filtervalue
    this.loadInitPost()
    console.log(filtervalue)
    }
    else{
      document.documentElement.scrollTop = 0;
      this.filter={}
      this.skip = 0
      this.loadInitPost()
    }
  }
  // load the Initial 6 recordstext

  loadInitPost() {
   this.api.getFirstRecords({'skip':this.skip,'filter':this.filter}).subscribe(data => {
     console.log(data);
     this.allpost = data;
     this.skip = this.skip + 10;
   });
 }


 onScroll() {
   if (this.notscrolly && this.notEmptyPost) {
    this.spinner.show();
    this.notscrolly = false;
    this.show = true;
    setTimeout(()=>{
      console.log('stop')
      this.loadNextPost();
    },500);
  }
 }
 // load th next 6 posts
 loadNextPost() {
   this.api.getnextRecords({'skip': this.skip,'filter':this.filter})
   .subscribe( (data: any) => {
      const newPost = data;
      this.spinner.hide();
      this.show = false;
      if (newPost.length === 0 ) {
        // this.notEmptyPost =  false;
        this.show = false
      }
      // add newly fetched posts to the existing post
      this.allpost = this.allpost.concat(newPost);
      this.skip = this.skip + 10;
      this.notscrolly = true;
    });
 }
 
 getstoredata(id){
   console.log('app id==',id)
   this.api.findrecord(id).subscribe(
     res => this.appdata = res[0]
   )
 }

 editAppData(id){
   console.log('id=',id)
 }

 update(value): any{
   console.log(value)
    let data = {
     _id: this.appdata._id,
     App:value.App,
     Category: value.Category,
     Rating:value.Rating
   }
   this.api.updateappdata(data).subscribe(
     res =>{
       if(res){
         this.skip = 0
         this.ngOnInit()
       }
     }
   )
 }
}
