import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IntentsComponent } from './pages/intents/intents.component';
import { IntentComponent } from './pages/intent/intent.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'intents', component: IntentsComponent},
  { path: 'intents/:id', component: IntentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent];
