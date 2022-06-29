import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTimerComponent } from './page-timer/page-timer.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [ {
  path: '',
  component: PageTimerComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
