const TicketManager = require('./ticketManager');
const ticketManager = new TicketManager(10);

const chalk = require('chalk');
const log = console.log;

ticketManager.on('buy', () => {
  log(chalk.green('Someone bought a ticket!'));
});

ticketManager.buy('test@gmail.com', 20);
ticketManager.buy('test@gmail.com', 20);

ticketManager.once('buy', () => {
  log(chalk.red('This is only called once'));
});

ticketManager.buy('test@gmail.com', 20);
ticketManager.buy('test@gmail.com', 20);
