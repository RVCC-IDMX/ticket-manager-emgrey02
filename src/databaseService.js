const chalk = require('chalk');
const log = console.log;

class DatabaseService {
  save(email, price, timestamp) {
    log(
      chalk.cyan(
        chalk`\nRunning query...\n\nINSERT INTO orders VALUES (email, price, created) \nVALUES {yellowBright.bold (${email}, ${price}, ${timestamp})}\n\n`
      )
    );
  }
}

module.exports = DatabaseService;
