import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserConfigComponent } from './Components/user-config/user-config.component';
import { AdminConfigComponent } from './Components/admin-config/admin-config.component';

const routes: Routes = [
    { path: 'user-config', component: UserConfigComponent },
    { path: 'admin-config', component: AdminConfigComponent }
];
0
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
