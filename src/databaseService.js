const chalk = require('chalk');
const log = console.log;

class DatabaseService {
  save(email, price, timestamp) {
    log(
      chalk.cyan(
        chalk`Running query: INSERT INTO orders VALUES (email, price, created) VALUES {yellowBright.bold (${email}, ${price}, ${timestamp})}`
      )
    );
  }
}

module.exports = DatabaseService;
