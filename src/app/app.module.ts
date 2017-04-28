import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// import { MdButtonModule, MdSidenavModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { MdIconModule, MdProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './app.material';

//  Application routes
import { AppRouter } from './app.router';

//  Custom components
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { ContainerComponent } from './components/container/container.component';
import { FoodmenuComponent } from './components/foodmenu/foodmenu.component';
import { InputComponent } from './components/input/input.component';
import { OrderAllComponent } from './components/order-all/order-all.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { OrderNewComponent } from './components/order-new/order-new.component';
import { PanelComponent } from './components/panel/panel.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TableComponent } from './components/table/table.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FormatByTypePipe } from './pipes/format-by-type.pipe';
import { OrderAllFilterPipe } from './pipes/order-all-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    WelcomeComponent,
    OrderDetailComponent,
    OrderNewComponent,
    OrderAllComponent,
    SideNavComponent,
    FoodmenuComponent,
    OrderHistoryComponent,
    PanelComponent,
    CardComponent,
    FormatByTypePipe,
    ButtonComponent,
    InputComponent,
    TableComponent,
    ContainerComponent,
    OrderAllFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    // MdGridListModule,
    // MaterialModule.forRoot(),
    BrowserAnimationsModule,
    AppRouter,
    // MdButtonModule,
    // MdSidenavModule,
    // MdToolbarModule,
    MdIconModule,
    MdProgressSpinnerModule,
    // AppMaterialModule,
    RouterModule
  ],
  schemas: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
