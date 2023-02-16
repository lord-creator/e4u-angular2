import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
   nots:string[]=[]
   showold: boolean = false
   oldnots:string[]=[]
   constructor(user: UserService){
    this.nots = user.user.notifications
    console.log(this.nots)
    this.oldnots=[...user.user.read_notifications]
    user.user.read_notifications = [...user.user.notifications,...user.user.read_notifications] 
    // user.user.notifications
    user.user.notifications=[]
   }
   messages(){
    this.showold=!this.showold
   }
}
