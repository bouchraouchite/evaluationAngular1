import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router'; // Correct import for Router
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ajouterformation',
  standalone:true,
  templateUrl: './ajouterformation.component.html',
  styleUrls: ['./ajouterformation.component.scss'], // Correct property name for styles
  imports:[FormsModule,CommonModule]
})
export class AjouterformationComponent {
  newFormation = {
    titre: '',
    description: '',
    dateDebut: '',
    dateFin: ''
  };

  constructor(private api: ApiserviceService, private router: Router) {}

  public addformation() {
    console.log(this.newFormation);
    if(this.newFormation.titre==''||this.newFormation.description==''||this.newFormation.dateDebut=='' )return;
    this.api.createFormation(this.newFormation).subscribe(() => {
      console.log('success');
      this.router.navigate(['/Formations']); 
    });
  }
}
