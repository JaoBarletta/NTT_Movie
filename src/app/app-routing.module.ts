import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { DetailsComponent } from './components/details/details.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    {path: '', component: BodyComponent},
    {path:'detail/:imdbID', component:DetailsComponent},
    // {path:'**', redirectTo:'', pathMatch:'full'}
    
];  
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }