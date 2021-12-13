import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarMenu } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ReportsTable } from './reports/reports.table';
import { AuthComponent } from './auth/auth.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { AppRoutingModule } from './app-routing.module';
import { MailInterface } from './sidebar/mail_menu/mail.service';
import { ChatComponent } from './chat/chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { EquipmentsDetailComponent } from './equipments/equipments-detail/equipments-detail.component';

@NgModule({
  declarations: [	
    AppComponent,
      HeaderComponent,
      SidebarMenu,
      ReportsTable,
      AuthComponent,
      EquipmentsComponent,
      MailInterface,
      ChatComponent,
      LoadingSpinnerComponent,
      EquipmentsDetailComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatTableModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
