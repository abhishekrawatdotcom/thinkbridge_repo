
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {AdminService} from './admin.service';
import { AppComponent } from './app.component';
import { ViewallproductComponent } from './viewallproduct/viewallproduct.component';
import { Routes, RouterModule,ActivatedRoute } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FormsModule } from '@angular/forms';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { DateleproductComponent } from './dateleproduct/dateleproduct.component';


const routes: Routes = [
  { path: 'list', component: ViewallproductComponent },
  { path: 'add', component: AddproductComponent },
  { path: 'update', component: UpdateproductComponent },
  { path: 'delete', component: DateleproductComponent },
  
];


@NgModule({
  declarations: [
    AppComponent,
    ViewallproductComponent,
    AddproductComponent,
    UpdateproductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule

  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
