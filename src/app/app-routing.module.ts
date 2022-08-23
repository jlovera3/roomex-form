import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterComponent } from './pages/enter/enter.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';

const routes: Routes = [ 
  {
    path: 'enter',
    component: EnterComponent
  },
  {
    path: 'thankyou',
    component: ThankyouComponent,
    // canActivate: //tenemos que ver si está validado
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
