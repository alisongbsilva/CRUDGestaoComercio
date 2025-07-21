export interface Pedidos {
  _id?: string; // ou id: string, se você não usa MongoDB
  numero: string;
  cliente: string;
  empresa: string;
   observacao?: string;
   data?: string;
}