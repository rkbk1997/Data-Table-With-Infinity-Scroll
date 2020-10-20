import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { SelectComponent } from './select/select.component';
import { InputTextComponent } from './input-text/input-text.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { TableconfigService } from './table/tableconfig.service';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SelectComponent,
    InputTextComponent,
    EditComponent,
    DeleteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSortModule,
    FormsModule
  ],
  providers: [TableconfigService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
