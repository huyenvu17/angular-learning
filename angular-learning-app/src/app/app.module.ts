
import { FooterComponent } from './bai-tap1/footer/footer.component';
import { SidebarComponent } from './bai-tap1/sidebar/sidebar.component';
import { ContentsComponent } from './bai-tap1/contents/contents.component';
import { HeaderComponent } from './bai-tap1/header/header.component';
import { Buoi1Module } from './buoi1/buoi1.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { BaiTap1Component } from './bai-tap1/bai-tap1.component';
import { BaiTap2Component } from './bai-tap2/bai-tap2.component';
import { BaiTap2HeaderComponent } from './bai-tap2/bai-tap2-header/bai-tap2-header.component';
import { BaiTap2CarouselComponent } from './bai-tap2/bai-tap2-carousel/bai-tap2-carousel.component';
import { BaiTap2IndexComponent } from './bai-tap2/bai-tap2-index/bai-tap2-index.component';
import { BaiTap2FooterComponent } from './bai-tap2/bai-tap2-footer/bai-tap2-footer.component';
import { BaiTap2IndexcontentComponent } from './bai-tap2/bai-tap2-index/bai-tap2-indexcontent/bai-tap2-indexcontent.component';
import { BaiTap2CardListComponent } from './bai-tap2/bai-tap2-index/bai-tap2-card-list/bai-tap2-card-list.component';
import { BaiTap2CardItemComponent } from './bai-tap2/bai-tap2-index/bai-tap2-card-list/bai-tap2-card-item/bai-tap2-card-item.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HeaderComponent,
    ContentsComponent,
    SidebarComponent,
    FooterComponent,
    BaiTap1Component,
    BaiTap2Component,
    BaiTap2HeaderComponent,
    BaiTap2CarouselComponent,
    BaiTap2IndexComponent,
    BaiTap2FooterComponent,
    BaiTap2IndexcontentComponent,
    BaiTap2CardListComponent,
    BaiTap2CardItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Buoi1Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
