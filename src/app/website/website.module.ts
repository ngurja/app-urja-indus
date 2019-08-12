import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopnavComponent  } from './topnav/topnav.component';
import { WorkComponent } from './work/work.component';
// import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ],
  declarations: [WebsiteComponent, HeaderComponent, FooterComponent, TopnavComponent, WorkComponent]
})
export class WebsiteModule { }
