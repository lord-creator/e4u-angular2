import { Time } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  auth: {auth:boolean,time:string,token:string,user:string} = {
    auth: false,
    time: '',
    token:'',
    user:''
  }
  user: {username:string,token:string,videos:string[],posts:string[],
    balance:number,today_earnings:number,actions:number,completed_actions:number,
    prof_pic:string,transactions:string[],email:string,referals:string[],
    refere_link:string,notifications:string[],reg_date: Date
} 
= {
  username:'',token:'',videos:[],posts:[],balance:0,today_earnings:0,actions:0,completed_actions:0,
  prof_pic:'',transactions:[],email:'',referals:[],refere_link:'',notifications:[],reg_date: new Date()
}
  constructor() {
    console.log("UserService is initialized")
   }
} 
