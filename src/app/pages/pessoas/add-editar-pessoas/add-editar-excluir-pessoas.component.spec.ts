import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditarPessoasComponent } from './add-editar-excluir-pessoas.component';

describe('AddEditarPessoasComponent', () => {
  let component: AddEditarPessoasComponent;
  let fixture: ComponentFixture<AddEditarPessoasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditarPessoasComponent]
    });
    fixture = TestBed.createComponent(AddEditarPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
