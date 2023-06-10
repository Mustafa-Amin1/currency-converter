import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterPanelComponent } from './converter-panel.component';

describe('ConverterPanelComponent', () => {
  let component: ConverterPanelComponent;
  let fixture: ComponentFixture<ConverterPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConverterPanelComponent]
    });
    fixture = TestBed.createComponent(ConverterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
