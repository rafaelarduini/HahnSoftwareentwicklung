import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ClientDialogComponent } from './components/dialog/client-dialog/client-dialog.component';
import { ProductDialogComponent } from './components/dialog/product-dialog/product-dialog.component';
import { DeleteDialogComponent } from './components/dialog/delete-dialog/delete-dialog.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ClientTableComponent } from './components/tables/client-table/client-table.component';
import { ProductTableComponent } from './components/tables/product-table/product-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientDialogComponent,
    ProductDialogComponent,
    DeleteDialogComponent,
    ToolbarComponent,
    ClientTableComponent,
    ProductTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
