import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLibComponent } from './personal-lib.component';

describe('PersonalLibComponent', () => {
  let component: PersonalLibComponent;
  let fixture: ComponentFixture<PersonalLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
