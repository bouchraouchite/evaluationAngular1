import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterformationComponent } from './ajouterformation.component';

describe('AjouterformationComponent', () => {
  let component: AjouterformationComponent;
  let fixture: ComponentFixture<AjouterformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
