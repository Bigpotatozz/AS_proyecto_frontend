import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosEdicionComponent } from './libros-edicion.component';

describe('LibrosEdicionComponent', () => {
  let component: LibrosEdicionComponent;
  let fixture: ComponentFixture<LibrosEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrosEdicionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrosEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
