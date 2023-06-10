import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertedCardComponent } from './converted-card.component';

describe('ConvertedCardComponent', () => {
  let component: ConvertedCardComponent;
  let fixture: ComponentFixture<ConvertedCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvertedCardComponent]
    });
    fixture = TestBed.createComponent(ConvertedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
