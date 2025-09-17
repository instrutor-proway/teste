/**
 * @fileoverview Servidor Express.js simples com APIs RESTful básicas
 * @description Este arquivo implementa um servidor web usando Express.js com algumas rotas de exemplo
 * para demonstração de padrões RESTful básicos. Inclui endpoints para verificação de status,
 * eco de dados e mensagens de saudação.
 * @author Sistema
 * @version 1.0.0
 */

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsing de JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Rota principal do servidor - Endpoint de verificação de funcionamento
 * @route GET /
 * @description Retorna uma mensagem confirmando que o servidor está funcionando
 * @returns {Object} 200 - Objeto JSON com mensagem de confirmação
 * @returns {Object} 200.message - Mensagem indicando que o servidor está funcionando
 * @example
 * // Requisição
 * GET /
 * 
 * // Resposta
 * {
 *   "message": "Servidor Express funcionando!"
 * }
 */
app.get('/', (req, res) => {
  res.json({ message: 'Servidor Express funcionando!' });
});

/**
 * Endpoint de status do servidor
 * @route GET /api/status
 * @description Retorna o status atual do servidor e timestamp da requisição
 * @returns {Object} 200 - Objeto JSON com informações de status
 * @returns {string} 200.status - Status do servidor (sempre "online")
 * @returns {string} 200.timestamp - Timestamp ISO da requisição
 * @example
 * // Requisição
 * GET /api/status
 * 
 * // Resposta
 * {
 *   "status": "online",
 *   "timestamp": "2023-12-07T10:30:00.000Z"
 * }
 */
app.get('/api/status', (req, res) => {
  res.json({ 
    status: 'online',
    timestamp: new Date().toISOString()
  });
});

/**
 * Endpoint de eco - retorna os dados enviados no body da requisição
 * @route POST /api/echo
 * @description Recebe dados JSON no body da requisição e os retorna de volta
 * @param {Object} req.body - Dados JSON enviados na requisição
 * @returns {Object} 200 - Objeto JSON contendo os dados recebidos
 * @returns {Object} 200.received - Os dados que foram enviados no body da requisição
 * @example
 * // Requisição
 * POST /api/echo
 * Content-Type: application/json
 * {
 *   "nome": "João",
 *   "idade": 30
 * }
 * 
 * // Resposta
 * {
 *   "received": {
 *     "nome": "João",
 *     "idade": 30
 *   }
 * }
 */
app.post('/api/echo', (req, res) => {
  const data = req.body;
  res.json({ received: data });
});

/**
 * Endpoint de saudação
 * @route GET /api/hello
 * @description Retorna uma mensagem de saudação "Hello, World!"
 * @returns {Object} 200 - Objeto JSON com mensagem de saudação
 * @returns {string} 200.message - Mensagem "Hello, World!"
 * @example
 * // Requisição
 * GET /api/hello
 * 
 * // Resposta
 * {
 *   "message": "Hello, World!"
 * }
 */
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

/**
 * Middleware global para tratamento de erros
 * @description Captura e trata todos os erros não tratados da aplicação
 * @param {Error} err - Objeto de erro capturado
 * @param {Object} req - Objeto de requisição do Express
 * @param {Object} res - Objeto de resposta do Express  
 * @param {Function} next - Função next do Express
 * @returns {Object} 500 - Resposta JSON com mensagem de erro genérica
 * @example
 * // Resposta em caso de erro
 * {
 *   "error": "Algo deu errado!"
 * }
 */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo deu errado!' });
});

/**
 * Middleware para tratamento de rotas não encontradas (404)
 * @description Captura todas as requisições para rotas que não existem
 * @param {Object} req - Objeto de requisição do Express
 * @param {Object} res - Objeto de resposta do Express
 * @returns {Object} 404 - Resposta JSON indicando que a rota não foi encontrada
 * @example
 * // Resposta para rota inexistente
 * {
 *   "error": "Rota não encontrada"
 * }
 */
app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

/**
 * Inicializa o servidor Express
 * @description Inicia o servidor HTTP na porta especificada pela variável de ambiente PORT ou 3000 por padrão
 * @param {number} PORT - Porta onde o servidor será executado
 * @example
 * // Servidor iniciado na porta padrão
 * // Saída no console: "Servidor rodando na porta 3000"
 * 
 * // Servidor iniciado em porta personalizada
 * // PORT=8080 node index.js
 * // Saída no console: "Servidor rodando na porta 8080"
 */
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});