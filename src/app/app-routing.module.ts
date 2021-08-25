import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { CreateEmployeeGuard } from './employees/create-employee.guard';

const routes: Routes = [
  { path: 'employees', component: EmployeesComponent },
  {
    path: 'employees/:id',
    component: EmployeesComponent,
    canActivate: [CreateEmployeeGuard],
  },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
