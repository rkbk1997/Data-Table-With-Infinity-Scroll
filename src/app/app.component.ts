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
  allpost;
  notEmptyPost = true;
  notscrolly = true;
  skip = 0
   ngOnInit() {
     this.loadInitPost();
  }

  // load the Initial 6 records

  loadInitPost() {
   this.api.getFirstRecords({'skip':this.skip,'filter':{'Category':'FAMILY'}}).subscribe(data => {
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
   this.api.getnextRecords({'skip': this.skip,'filter':{'Category':'FAMILY'}})
   .subscribe( (data: any) => {
      const newPost = data;
      this.spinner.hide();
      this.show = false;
      if (newPost.length === 0 ) {
        this.notEmptyPost =  false;
      }
      // add newly fetched posts to the existing post
      this.allpost = this.allpost.concat(newPost);
      this.skip = this.skip + 10;
      this.notscrolly = true;
    });
 }
 
}
