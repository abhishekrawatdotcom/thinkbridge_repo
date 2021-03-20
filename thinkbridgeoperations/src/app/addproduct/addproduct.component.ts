import { product } from './../product';
import { Component, OnInit } from '@angular/core';
import { AdminService } from './../admin.service';
import { contact } from './addprod';
import { formatCurrency } from '@angular/common';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  con = new product();

  constructor(private admin:AdminService) { }

  ngOnInit(): void {
  }


  addnewproduct(){
    this.admin.postdata(this.con).subscribe(
      response =>{
        console.warn(response)
        alert('Product' + " " + this.con.name  + " "+ 'has been created')
      },
      error => console.log('error',error)

    );

  }

    


}
