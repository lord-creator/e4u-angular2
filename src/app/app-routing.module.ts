import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { DepositComponent } from './deposit/deposit.component';
import { EarnComponent } from './earn/earn.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReferallsComponent } from './referalls/referalls.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'transactions', component: TransactionsComponent},
  {path: 'earn', component:EarnComponent},
  {path: 'account', component: AccountComponent},
  {path: 'account', component: ReferallsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'deposit', component: DepositComponent},
  {path: 'referals', component: ReferallsComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
