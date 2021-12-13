import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AuthComponent } from './auth/auth.component';
import { ChatComponent } from './chat/chat.component';
import { EquipmentsDetailComponent } from './equipments/equipments-detail/equipments-detail.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { GuardGuard } from './guard.guard';
import { ReportsTable } from './reports/reports.table';
import { MailInterface } from './sidebar/mail_menu/mail.service';

const routes: Routes = [
    { path: 'equipments', component: EquipmentsComponent},
    { path: 'equipment/:equipmentsName', 
      canActivate: [GuardGuard], // activating the protection measure in case the equipment does not correspond
      component: EquipmentsDetailComponent}, // for detail equipment page | future feature
    { path: 'repots', component: ReportsTable},
    { path: 'mail-menu', component: MailInterface},
    { path: 'chat', component: ChatComponent},
    { path: 'auth', component: AuthComponent },
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: '**', redirectTo: 'auth', pathMatch: 'full' },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
