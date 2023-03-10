import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from 'src/app/model/client';

@Component({
  selector: 'app-client-dialog',
  templateUrl: './client-dialog.component.html',
  styleUrls: ['./client-dialog.component.scss'],
})
export class ClientDialogComponent {
  clientForm!: FormGroup;
  client = new Client();
  isEdit: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ClientDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public clientData: Client
  ) {
    if (clientData) {
      this.client = clientData;
      this.isEdit = true;
    }
  }

  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
      id: [this.client.id],
      name: [this.client.name, Validators.required],
      surname: [this.client.surname, Validators.required],
      email: [this.client.email, Validators.required],
    });
  }

  onConfirm(): void {
    this.dialogRef.close(this.clientForm.value);
  }
}
