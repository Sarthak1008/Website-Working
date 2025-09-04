import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparasionComponent } from './comparasion.component';

describe('ComparasionComponent', () => {
  let component: ComparasionComponent;
  let fixture: ComponentFixture<ComparasionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparasionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparasionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
