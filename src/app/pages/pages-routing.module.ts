import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {GameOverviewComponent} from './game-overview/game-overview.component';
import {ChurnPredictionsComponent} from "./churn-predictions/churn-predictions.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  }, {
    path: 'filler-library',
    loadChildren: './filler-library/filler-library.module#FillerLibraryModule',
  },{
    path: 'norah-scheduler',
    loadChildren: './norah-scheduler/norah-scheduler.module#NorahSchedulerModule',
  }, {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  },{
    path: 'smart-pricing',
    loadChildren: './smart-pricing/smart-pricing.module#SmartPricingModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: 'game-overview',
    component: GameOverviewComponent,
  }, {
    path: 'churn-predictions',
    component: ChurnPredictionsComponent,
  },{
    path: 'game-overview',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
