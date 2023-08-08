import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminreviewsComponent } from './adminreviews.component';

describe('AdminreviewsComponent', () => {
  let component: AdminreviewsComponent;
  let fixture: ComponentFixture<AdminreviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminreviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
