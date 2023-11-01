import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourHostelComponent } from './four-hostel.component';

describe('FourHostelComponent', () => {
  let component: FourHostelComponent;
  let fixture: ComponentFixture<FourHostelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourHostelComponent]
    });
    fixture = TestBed.createComponent(FourHostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
