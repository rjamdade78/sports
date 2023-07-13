import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchInformationComponent } from './match-information.component';

describe('MatchInformationComponent', () => {
  let component: MatchInformationComponent;
  let fixture: ComponentFixture<MatchInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
