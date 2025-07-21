export interface Produtos {
  _id?: string; // ou id: string, se você não usa MongoDB
  nome: string;
  valor: string;
  descricao: string;
  empresaId?: string;
}