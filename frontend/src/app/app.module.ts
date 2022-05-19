import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { CampgroundsComponent } from './views/campgrounds/campgrounds.component';
import { CardComponent } from './components/card/card.component';
import { CampgroundDetailsComponent } from './views/campground-details/campground-details.component';
import { CampgroundCreateComponent } from './views/campground-create/campground-create.component';
import { CampgroundFormComponent } from './components/campground-form/campground-form.component';
import { ModalComponent } from './components/modal/modal.component';
import { FooterComponent } from './components/footer/footer.component';
import { CampgroundEditComponent } from './views/campground-edit/campground-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CampgroundsComponent,
    CardComponent,
    CampgroundDetailsComponent,
    CampgroundCreateComponent,
    CampgroundFormComponent,
    ModalComponent,
    FooterComponent,
    CampgroundEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
