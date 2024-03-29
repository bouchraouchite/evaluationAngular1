import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { AdherantService } from '../adherant.service';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-adherant',
  standalone: true,
  imports: [FormsModule, NgFor,CommonModule],
  templateUrl: './adherant.component.html',
  styleUrl: './adherant.component.scss'
})

export class AdherantComponent implements OnInit {
  adherantData: any[] = [];
  searchTerm: string = ''; 
  formationData:any
  allformations: any;
  editedAdherant: any = {}; 

  
  constructor(private apiServ: AdherantService,  private modalService: NgbModal ) {}

  ngOnInit(): void {
    this.getAdherants(); 
  }
  getAdherants() {
    this.apiServ.getAdherants().subscribe(
      (data: any[]) => {
        this.adherantData = data; 
      },
      (error) => {
        console.error('Error fetching adherants:', error);
      }
    );
  }

  onDelete(id: number) {
  
    this.apiServ.deleteAdherant(id).subscribe(
      () => {
        console.log('Adherant deleted successfully');
        this.getAdherants();
      },
      (error) => {
        console.error('Error deleting adherant:', error);
      }
    );
  }
  
  search(): void {
    if (!this.searchTerm.trim()) {
      this.allformations();
      return;
    }
    this.apiServ.searchFormationsByTitle(this.searchTerm).subscribe((result) => {
      this.adherantData = result;
    });
  }
  updateAdherantn(id: number): void {
    this.apiServ.updateAdherant(this.editedAdherant, id).subscribe(() => {
      console.log("Formation updated successfully!");
      this.allformations();
      this.modalService.dismissAll();
    }, error => {
      console.error("Error updating formation:", error);
    });
  }
  openEditModal(formation: any, content: any): void {
    this.editedAdherant = { ...formation };
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

}
