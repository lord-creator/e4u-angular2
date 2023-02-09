import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { DepositComponent } from './deposit/deposit.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { EarnComponent } from './earn/earn.component';
import { AccountComponent } from './account/account.component';
import { ReferallsComponent } from './referalls/referalls.component';
import { MenunavComponent } from './menunav/menunav.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    DepositComponent,
    NotfoundComponent,
    TransactionsComponent,
    EarnComponent,
    AccountComponent,
    ReferallsComponent,
    MenunavComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
