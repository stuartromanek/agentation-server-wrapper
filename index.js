const { start } = require('agentation-mcp');

start({
  dbPath: process.env.DB_PATH || "/data/db.sqlite",
  port: process.env.PORT || 4747
});