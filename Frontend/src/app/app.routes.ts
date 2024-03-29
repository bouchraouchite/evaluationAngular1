import { RouterModule, Routes } from '@angular/router';
import { FormationComponent } from './formation/formation.component';
import { AjouterformationComponent } from './ajouterformation/ajouterformation.component';
import { NgModule } from '@angular/core';
import { AjouterAdherantsComponent } from './ajouter-adherants/ajouter-adherants.component';
import { AdherantComponent } from './adherant/adherant.component';

export const routes: Routes = [
    {
      path : "Formations" , 
      component : FormationComponent
    },
    {
      path : "ajouterformation" , 
      component : AjouterformationComponent 
    },
    {
      path : "ajouteradhérent" , 
      component : AjouterAdherantsComponent 
    },
     {
      path : "Adhérent" , 
      component : AdherantComponent 
    },
   
  ];
  
  // @NgModule({
  //   imports: [RouterModule.forRoot(routes)],
  //   exports: [RouterModule]
  // })
  // export class AppRoutingModule { }
  