import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
   @Output() authout= new EventEmitter<boolean>()
  //  @Input() user: UserService = new UserService()
  
  auth: boolean =  this.user.auth.auth
  loginout(){
    this.user.auth.auth=!this.user.auth.auth
  }
check(): string{
  if(this.auth){
    return "notifications"
  }
  return 'login'
}
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
emitauth(auth:boolean): void{
}
  constructor(private breakpointObserver: BreakpointObserver, public user: UserService) {
  this.authout.emit(this.user.auth.auth);
  }
  test(){
    this.authout.emit(this.user.auth.auth)
  }

}
