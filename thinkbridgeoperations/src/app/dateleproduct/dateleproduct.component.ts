import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from './../admin.service';

@Component({
  selector: 'app-dateleproduct',
  templateUrl: './dateleproduct.component.html',
  styleUrls: ['./dateleproduct.component.css']
})
export class DateleproductComponent implements OnInit {

  productid = 0;

  constructor(private activateroute:ActivatedRoute,private admin:AdminService) { }

  ngOnInit(): void {
    this.activateroute.params.subscribe(data =>{
      this.productid = data.id;
      this.admin.deletedata(this.productid).subscribe(deletedata =>{
        console.log('product has been deleted')
      })
    });
  }

}
