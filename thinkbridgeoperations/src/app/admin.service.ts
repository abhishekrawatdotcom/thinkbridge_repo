import { product } from './product';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  viewproducts(){
    let baseurl = "http://127.0.0.1:8000/product/";
    return this.http.get(baseurl);
  }
  viewproduct(productid){
    let baseurl = "http://127.0.0.1:8000/product/" +productid;
    return this.http.get(baseurl);
  }


  postdata(mydata):Observable<product>{
    const baseurl ='http://127.0.0.1:8000/product/'
    return this.http.post<product>(baseurl,mydata);
}

updatedata(productid,data):Observable<product>{
  const baseurl ='http://127.0.0.1:8000/product/'+productid;
  return this.http.put<product>(baseurl,productid);

}

deletedata(productid):Observable<product>{
  const baseurl ='http://127.0.0.1:8000/product/'+productid;
  return this.http.delete<product>(baseurl);

}

}
