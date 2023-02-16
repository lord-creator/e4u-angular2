import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// let userdata: UserService= new UserService()
export class AppComponent {
  auth: {username: string,token: string,authentificated:boolean}=
        {username: '', token: '',authentificated:false}
    // user: UserService = new UserService()
    
  // user: {username:string,password:string,
  //       token:string,videos:string[],posts:string[],
  //       balance:number,today_earnings:number,actions:number,completed_actions:number,
  //       prof_pic:string,transactions:string[],email:string,referals:string[],
  //       refere_link:string,notifications:string[],reg_date: Date
  //   } 
  //   = {
  //     username:'',
  //     password:'',
  //     token:'',
  //     videos:[],
  //     posts:[],balance:0,
  //     today_earnings:0,actions:0,
  //     completed_actions:0,
  //     prof_pic:'',
  //     transactions:[],
  //     email:'',referals:[],
  //     refere_link:'',
  //     notifications:[],
  //     reg_date: new Date()
  //   }
  title = 'e4u';
  authoutt: boolean = true
  check(val:boolean){
      console.log(val)
      this.auth.authentificated = val
  }
  constructor(public user: UserService){}
  ngOnit(){

  }
}
