export interface Clientes {
  _id?: string; // ou id: string, se você não usa MongoDB
  nome: string;
  email?: string;
  telefone?: string;
  empresaId? : string;
}