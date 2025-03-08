import { MatPaginatorIntl } from '@angular/material/paginator';

export function CustomPaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = 'Itens por página:';
  paginatorIntl.nextPageLabel = 'Próxima página';
  paginatorIntl.previousPageLabel = 'Página anterior';
  paginatorIntl.firstPageLabel = 'Primeira página';
  paginatorIntl.lastPageLabel = 'Última página';
  paginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0) {
      return `Nenhum item disponível`;
    }
    const startIndex = page * pageSize + 1;
    const endIndex = Math.min(startIndex + pageSize - 1, length);
    return `${startIndex} – ${endIndex} de ${length}`;
  };

  return paginatorIntl;
}
