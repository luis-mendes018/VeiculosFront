import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmar-exclusao-empresa',
  templateUrl: './confirmar-exclusao-empresa.component.html',
  styleUrls: ['./confirmar-exclusao-empresa.component.css']
})
export class ConfirmarExclusaoEmpresaComponent {
  constructor(
      public dialogRef: MatDialogRef<ConfirmarExclusaoEmpresaComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    onConfirm(): void {
      this.dialogRef.close(true); // Retorna 'true' para confirmar a exclusão
    }

    onCancel(): void {
      this.dialogRef.close(false); // Retorna 'false' para cancelar
    }
}
