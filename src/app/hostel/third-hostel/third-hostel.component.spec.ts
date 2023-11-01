import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdHostelComponent } from './third-hostel.component';

describe('ThirdHostelComponent', () => {
  let component: ThirdHostelComponent;
  let fixture: ComponentFixture<ThirdHostelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdHostelComponent]
    });
    fixture = TestBed.createComponent(ThirdHostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
