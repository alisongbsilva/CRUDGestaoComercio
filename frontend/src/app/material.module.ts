import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from '@angular/material/table';

@NgModule({
    exports: [
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatTableModule
    ]
})

export class MaterialModule {}