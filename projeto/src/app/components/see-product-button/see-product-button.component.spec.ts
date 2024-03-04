import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeProductButtonComponent } from './see-product-button.component';

describe('SeeProductButtonComponent', () => {
  let component: SeeProductButtonComponent;
  let fixture: ComponentFixture<SeeProductButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeeProductButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeeProductButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
