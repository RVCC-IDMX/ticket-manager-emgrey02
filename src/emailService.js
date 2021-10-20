const chalk = require('chalk');
const log = console.log;

class EmailService {
  send(email) {
    log(
      chalk.greenBright(chalk`Sending email to {yellowBright.bold ${email}}\n`)
    );
  }
}

module.exports = EmailService;
