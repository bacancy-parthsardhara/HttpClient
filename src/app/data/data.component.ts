import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { post } from 'selenium-webdriver/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  datas:any  = [];
  dataS:any  = [];

  constructor(private dataService : DataService ) { 
    this.getdata();
  }

  getdata(): void {
    // this.dataService.getdata().subscribe(response =>{
    //   this.datas = response;
    //   console.log(this.datas);  
    // });
    this.dataService.getdata()
    .subscribe(response => {
      this.datas = response;
      console.log(this.datas);
    });
  }

  creatPost(name : string):void{
    this.dataService.creatPost({name}).subscribe(response =>{
      this.dataS.push(response);
        // console.log(this.datas);
    });
  }

  deletePost(post){
    this.datas = this.datas.filter(i => i !== post);
    this.dataService.deletePost(post).subscribe();

    // console.log(post);
    // this.dataService.deletePost(post).subscribe(() => {
    //   let index = this.datas.indexOf(post);
    //   console.log(index);
    //   this.datas.splice(index, 1);
    //   // console.log(this.datas);
    // });
  }

  updatePostPatch(post) {
    this.dataService.updatePost(post)
      .subscribe(response => {
        console.log(response);
      });
  }
  updatePostPut(post){
    this.dataService.updatePut(post)
      .subscribe(response => {
        console.log(response);
      });

  }

  ngOnInit() {
  }

}
