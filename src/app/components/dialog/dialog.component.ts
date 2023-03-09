import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  clientForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  addClient() {
    const values = this.clientForm.value;

    const client: Client = {
      name: values.name,
      surname: values.surname,
      email: values.email,
    };

    this.clientService.addClient(client).subscribe((result) => {
      alert('suesso');
    });
  }
}
