import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDelfabroComponent } from './lista-delfabro.component';

describe('ListaDelfabroComponent', () => {
  let component: ListaDelfabroComponent;
  let fixture: ComponentFixture<ListaDelfabroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDelfabroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDelfabroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
