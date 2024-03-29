import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdherantService } from '../adherant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-adherants',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './ajouter-adherants.component.html',
  styleUrls: ['./ajouter-adherants.component.scss']
})
export class AjouterAdherantsComponent implements OnInit {
  newAdherant: any = {
    nom: '',
    prenom: '',
    contact: '',
    formation: {
      id: '',
      
    }
  };
  selectedFormationId: number | undefined;
  formations: any[] = [];

  constructor(private apiService: ApiserviceService, private apiServ: AdherantService , private router: Router) {}

  ngOnInit(): void {
    this.getFormations();
  }

  getFormations() {
    this.apiService.getformations().subscribe(
      (data: any[]) => {
        this.formations = data;
      },
      (error) => {
        console.error('Error fetching formations:', error);
        this.router.navigate(['/Adhérent']); 

      }
    );
  }

  onSubmit() {
    this.apiServ.createAdherant(this.newAdherant).subscribe(
      (response) => {
        console.log('Nouvel adhérent créé avec succès:', response);
        this.newAdherant = {
          nom: '',
          prenom: '',
          contact: '',
          formation: {
            id: null,
          }
        };
      },
      (error) => {
        console.error('Error creating adherent:', error);
      }
      
    );
  }


}
