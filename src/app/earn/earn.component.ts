import { Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-earn',
  templateUrl: './earn.component.html',
  styleUrls: ['./earn.component.css']
})
export class EarnComponent implements OnInit  {
  // user: UserService= new UserService();

  constructor(public user: UserService){

  }
  ngOnInit():void{

  }
  
}
