import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CampgroundsComponent } from './views/campgrounds/campgrounds.component';
import { CampgroundCreateComponent } from './views/campground-create/campground-create.component';
import { CampgroundDetailsComponent } from './views/campground-details/campground-details.component';
import { CampgroundEditComponent } from './views/campground-edit/campground-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'campgrounds', pathMatch: 'full', component: CampgroundsComponent },
  {
    path: 'campgrounds/new',
    pathMatch: 'full',
    component: CampgroundCreateComponent,
  },
  {
    path: 'campgrounds/:id',
    pathMatch: 'full',
    component: CampgroundDetailsComponent,
  },
  {
    path: 'campgrounds/:id/edit',
    pathMatch: 'full',
    component: CampgroundEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
