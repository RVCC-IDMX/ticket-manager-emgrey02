const chalk = require('chalk');
const log = console.log;

class DatabaseService {
  save(email, price, timestamp) {
    log(
      chalk.bgRed(
        `Running query: INSERT INTO orders VALUES (email, price, created) VALUES (${email}, ${price}, ${timestamp})`
      )
    );
  }
}

module.exports = DatabaseService;
