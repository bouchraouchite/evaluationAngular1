import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherantComponent } from './adherant.component';

describe('AdherantComponent', () => {
  let component: AdherantComponent;
  let fixture: ComponentFixture<AdherantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdherantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdherantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
