import { product } from './../product';
import { HttpClient } from '@angular/common/http';
import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-viewallproduct',
  templateUrl: './viewallproduct.component.html',
  styleUrls: ['./viewallproduct.component.css']
})
export class ViewallproductComponent implements OnInit {
  list=<any>[];

  constructor(private admin:AdminService) {
    this.admin.viewproducts().subscribe(data =>{
      console.warn(data)
      this.list = data
      
    })
    
   }

  ngOnInit(): void {
    
    

  }

}
