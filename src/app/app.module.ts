import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PlanService } from './services/plan.service';
import { MessageService } from 'primeng/api';

import { HttpClientModule } from '@angular/common/http';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MenubarModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TabViewModule,
    PanelModule,
    TooltipModule,
    TableModule,
    ProgressBarModule,
    ToastModule
  ],
  providers: [PlanService,
    MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
