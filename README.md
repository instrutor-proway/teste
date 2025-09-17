# Express Minimal Server

Um servidor Express.js simples com APIs RESTful básicas para demonstração e prototipagem rápida.

## Instalação

```bash
npm install
```

## Execução

```bash
npm start
```

Ou diretamente:

```bash
node index.js
```

## Endpoints Disponíveis

- `GET /` - Verificação de funcionamento
- `GET /api/status` - Status do servidor
- `POST /api/echo` - Echo dos dados enviados
- `GET /api/hello` - Mensagem de saudação

## Docker

```bash
docker-compose up
```