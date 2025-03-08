import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmar-exclusao-grupo',
  templateUrl: './confirmar-exclusao-grupo.component.html',
  styleUrls: ['./confirmar-exclusao-grupo.component.css']
})
export class ConfirmarExclusaoGrupoComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmarExclusaoGrupoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true); // Retorna 'true' para confirmar a exclusão
  }

  onCancel(): void {
    this.dialogRef.close(false); // Retorna 'false' para cancelar
  }
}
