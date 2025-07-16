# CRUDGestaoComercio

## Setup do Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/alisongbsilva/CRUDGestaoComercio.git
cd CRUDGestaoComercio/backend
```

### 2. Instale as dependências
```bash
npm install
```
### 3. Instale o MongoDB Compass
Após a instalação, configure uma nova conexão e conecte a ela, por padrão na URI "mongodb://localhost:27017"

### 4. Configure as variáveis de ambiente
Crie um arquivo `.env` na pasta `backend` com o seguinte conteúdo (ajuste conforme necessário):

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/gestao_comercio
JWT_SECRET=VENDERGAS
```

### 5. Execute o backend
```bash
npm start
```

O backend estará rodando na porta definida no seu `.env` (por padrão, 3000).
O nome do DB criado conforme o ".env" será "gestão_comercio".

---