import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { DatePipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [NgFor,DatePipe,FormsModule],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.scss'
  
})
export class FormationComponent {
  formationData:any
  searchTerm: string = ''; 
  editedFormation: any = {}; 
  
  selectedGenre: string = "All"
  constructor(private api:ApiserviceService,  private modalService: NgbModal)  {

  }

  onDelete(id:number){ 
    this.api.deleteFormation(id).subscribe(() => {
      console.log("Deleted")
      this.allformations()
    })

  }

  public ngOnInit () : void {
    this.allformations();
  }
  public allformations () { 
    this.api.getformations().subscribe((formations)=>{
      this.formationData=formations;
    })
  }

  search(): void {
    if (!this.searchTerm.trim()) {
      this.allformations();
      return;
    }
    this.api.searchFormationsByTitle(this.searchTerm).subscribe((result) => {
      this.formationData = result;
    });
  }


  updateFormation(id: number): void {
    this.api.updateFormation(this.editedFormation, id).subscribe(() => {
      console.log("Formation updated successfully!");
      this.allformations();
      this.modalService.dismissAll();
    }, error => {
      console.error("Error updating formation:", error);
    });
  }

  openEditModal(formation: any, content: any): void {
    this.editedFormation = { ...formation };
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  

}
