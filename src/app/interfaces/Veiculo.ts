export interface Veiculo {
  id: number;
  modelo: string;
  placa: string;
  grupoId: number;
  grupo?: any; // Caso o grupo tenha mais informações
}
