import { product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from './../admin.service';



@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  productid = 0;

  productdetails:product;
 
  con = new product();
  constructor(private activateroute:ActivatedRoute,private admin:AdminService) { }

  ngOnInit(): void {
    this.activateroute.params.subscribe(data =>{
      this.productid = data.id;

      this.admin.viewproduct(this.productid).subscribe(productdata =>{
        this.productdetails = <any>productdata;
        console.log(this.productdetails);
      });
    });
    

  }

  updateproduct(){
    this.admin.updatedata(this.productid,this.con).subscribe(
      response =>{
        console.warn(response)
        alert('Product' + " " + this.con.name  + " "+ 'has been Updated')
      },
      error => console.log('error',error)

    );

  }


}
