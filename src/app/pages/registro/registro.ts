import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  private formBuilder = inject(FormBuilder);

  registroForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    email: ['', Validators.required],
    direccion: this.formBuilder.group({
      calle: [''],
      ciudad: ['']
    })
  });

  onSubmit() {
    console.log(this.registroForm.value);
  }

  cargarDireccion() {
    this.registroForm.patchValue({
      direccion: {
        calle: '123 Calle Principal',
        ciudad: 'Córdoba'
      }
    });
  }
}
