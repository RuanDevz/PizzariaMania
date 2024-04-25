const fs = require('fs');
const path = require('path');

// Carrega as variáveis de ambiente do arquivo .env
require('dotenv').config();

// Caminho para o arquivo de configuração JSON
const configPath = path.join(__dirname, 'config.json');

// Lê o conteúdo do arquivo de configuração JSON
fs.readFile(configPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo de configuração:', err);
    return;
  }

  // Faz substituições das variáveis de ambiente no JSON
  const config = JSON.parse(data);
  config.production.username = process.env.DB_USERNAME;
  config.production.password = process.env.DB_PASSWORD;
  config.production.database = process.env.DB_DATABASE;
  config.production.host = process.env.DB_HOST;
  config.production.dialect = process.env.DB_DIALECT;

  // Escreve o arquivo de configuração modificado
  fs.writeFile(configPath, JSON.stringify(config, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Erro ao escrever o arquivo de configuração:', err);
      return;
    }
    console.log('Variáveis de ambiente foram substituídas no arquivo de configuração.');
  });
});
