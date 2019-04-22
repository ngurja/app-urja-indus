import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ],
  declarations: [WebsiteComponent, HeaderComponent]
})
export class WebsiteModule { }
