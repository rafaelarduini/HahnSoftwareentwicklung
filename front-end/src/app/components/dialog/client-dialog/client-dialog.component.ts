import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-dialog',
  templateUrl: './client-dialog.component.html',
  styleUrls: ['./client-dialog.component.scss'],
})
export class ClientDialogComponent {
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

    const client = new Client();
    client.name = values.name;
    client.surname = values.surname;
    client.email = values.email;

    this.clientService.add(client).subscribe((result) => {
      alert('suesso');
    });
  }
}
