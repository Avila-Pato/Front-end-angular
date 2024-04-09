import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../services/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true
})
export class AddEditProductComponent implements OnInit {

  form: FormGroup;  // Iniciado directamente en FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required]
    });
  }

  ngOnInit() {
  
  }

  addProduct(){
      /* console.log(this.form.value.name)
        console.log(this.form.get('name')?.value) */

      const product: Product = {
        name: this.form.value.name,
        description: this.form.value.description,
        price: this.form.value.price,
        stock: this.form.value.stock
      }
      }
}
