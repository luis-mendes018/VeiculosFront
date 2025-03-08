import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmar-exclusao',
  templateUrl: './confirmar-exclusao.component.html',
  styleUrls: ['./confirmar-exclusao.component.css']
})
export class ConfirmarExclusaoComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmarExclusaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true); // Retorna 'true' para confirmar a exclusão
  }

  onCancel(): void {
    this.dialogRef.close(false); // Retorna 'false' para cancelar
  }
}
