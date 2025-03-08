import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmar-exclusao-plano',
  templateUrl: './confirmar-exclusao-plano.component.html',
  styleUrls: ['./confirmar-exclusao-plano.component.css']
})
export class ConfirmarExclusaoPlanoComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmarExclusaoPlanoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { descricao: string }
  ) {}

  cancelar(): void {
    this.dialogRef.close(false);
  }

  confirmar(): void {
    this.dialogRef.close(true);
  }
}
