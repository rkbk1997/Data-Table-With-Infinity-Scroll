import { Component, ViewChild } from '@angular/core';
import { ApiService } from './api.service';
import { TableconfigService } from './table/tableconfig.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private api: ApiService,
    private tableService: TableconfigService
  ) {}
  
  @ViewChild('cate') cate;

  colHeader: any[] = this.tableService.colHeader;

  searchItemList: any = this.tableService.searchItemList;

  tableData: any;

  notMorePost: boolean = false;

  showspinner: boolean = true;
  
  shownextpost: boolean;
  
  notEmptyPost = true;
  
  notscrolly = true;
  
  filter = {};
  
  sort = {};
  
  skip = 0;
  
  filterobject = {
    Category: '',
    Genres: '',
    App: '',
  };
  
  textKey = 'App';

  ngOnInit() {
    this.loadInitData();
  }

  loadInitData() {
    this.api
      .getFirstRecords({
        skip: this.skip,
        filter: this.filter,
        sort: this.sort,
      })
      .subscribe((data: any) => {
        if (data.length === 0) {
          this.notMorePost = true;
          this.showspinner = false;
        }
        console.log(data);
        this.tableData = data;
        this.skip = this.skip + 10;
      });
  }

  loadnext() {
    this.loadNextTableData();
  }

  loadNextTableData() {
    this.api
      .getnextRecords({ skip: this.skip, filter: this.filter, sort: this.sort })
      .subscribe((data: any) => {
        const newPost = data;
        if (newPost.length === 0) {
          this.notMorePost = true;
          this.showspinner = false;
        }
        this.tableData = this.tableData.concat(newPost);
        this.skip = this.skip + 10;
        this.notscrolly = true;
      });
  }

  applyfilter(a) {
    console.log('aa===', a);
    this.filter[a.key] = a.value;
    this.skip = 0;
    this.loadInitData();
    console.log(this.filter);
    this.filterobject[a.key] = a.value;
  }

  clearfilter() {
    this.filterobject.Category = '';
    this.filterobject.Genres = '';
    this.filterobject.App = '';
    this.notMorePost = false;
    this.skip = 0;
    this.filter = {};
    this.ngOnInit();
    this.showspinner = true;
  }

  incrementsort(key: any) {
    this.sort = {};
    this.sort[key] = 'ascending';
    console.log(this.sort);
    this.skip = 0;
    this.ngOnInit();
  }
  decrementsort(key: any) {
    this.sort = {};
    this.sort[key] = 'descending';
    console.log(this.sort);
    this.skip = 0;
    this.ngOnInit();
  }
}
