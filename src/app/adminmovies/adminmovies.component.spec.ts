import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmoviesComponent } from './adminmovies.component';

describe('AdminmoviesComponent', () => {
  let component: AdminmoviesComponent;
  let fixture: ComponentFixture<AdminmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminmoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
