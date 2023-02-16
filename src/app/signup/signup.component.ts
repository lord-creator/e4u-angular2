import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
      auth: {username: string,token: string,authentificated:boolean}=
        {username: '', token: '',authentificated:false}
      user: {username:string,password:string,
        token:string,videos:string[],posts:string[],
        balance:number,today_earnings:number,actions:number,completed_actions:number,
        prof_pic:string,transactions:string[],email:string,referals:string[],
        refere_link:string,notifications:string[],reg_date: Date
    } 
    = {
      username:'',
      password:'',
      token:'',
      videos:[],
      posts:[],balance:0,
      today_earnings:0,actions:0,
      completed_actions:0,
      prof_pic:'',
      transactions:[],
      email:'',referals:[],
      refere_link:'',
      notifications:[],
      reg_date: new Date()
    }
    confirm_password: string =''
    successMessage: string = ''
      constructor(public test: UserService){

      }
      ngOnInit():void{}
      signup(){
        console.log(this.user)
        this.test.user.username = this.user.username 
        this.test.auth.auth = true
        this.successMessage = "Registered succesfully"
        this.test.user.notifications.push("Succesfully signed up")
      }
} 
