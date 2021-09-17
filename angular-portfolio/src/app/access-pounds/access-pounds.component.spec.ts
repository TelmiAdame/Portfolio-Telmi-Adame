import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessPoundsComponent } from './access-pounds.component';

describe('AccessPoundsComponent', () => {
  let component: AccessPoundsComponent;
  let fixture: ComponentFixture<AccessPoundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessPoundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessPoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
