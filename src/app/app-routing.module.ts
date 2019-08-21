import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';
import { PropertiesListComponent } from './properties/properties-list/properties-list.component';
import { PropertyCreateComponent } from './properties/property-create/property-create.component';
import { PropertySingleComponent } from './properties/property-single/property-single.component';
import { PropertyUpdateComponent } from './properties/property-update/property-update.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardListComponent } from './dashboard/dashboard-list/dashboard-list.component';
import { DashboardCreateComponent } from './dashboard/dashboard-create/dashboard-create.component';
import { DashboardSingleComponent } from './dashboard/dashboard-single/dashboard-single.component';
import { DashboardEditComponent } from './dashboard/dashboard-edit/dashboard-edit.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'',
    pathMatch: 'full'
},
{
    path:'login',
    component:AuthComponent,
},

{
    path:'properties',
   // canActivate:[AuthGuard],
    component:PropertiesComponent,
    // canActivateChild:[AuthGuard],
    children:[{
        path:'',
        component:PropertiesListComponent
    }
    ,
    {
        path:'create',
        component:PropertyCreateComponent,
        //canActivate:[AuthGuard],
    },
    {
        path:':id',
        component:PropertySingleComponent
    }
    ,
    {
        path:':id/edit',
        component:PropertyUpdateComponent
    }

    ]   
},
{
    path:'dashboard',
    //canActivate:[AuthGuard],
    component:DashboardComponent,
    children:[{
        path:'',
        component:DashboardListComponent
    },
    {
        path:'create',
        component:DashboardCreateComponent
    }
    ,
    {
        path:':id',
        component:DashboardSingleComponent
    },
    {
        path:':id/edit',
        component:DashboardEditComponent
    }


    ]

    
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
