const TicketManager = require('./ticketManager');
const EmailService = require('./emailService');
const DatabaseService = require('./databaseService');

const chalk = require('chalk');
const log = console.log;

const ticketManager = new TicketManager(3);
const emailService = new EmailService();
const databaseService = new DatabaseService();

ticketManager.on('buy', (email, price, timestamp) => {
  emailService.send(email);
  databaseService.save(email, price, timestamp);
});

ticketManager.on('error', (error) => {
  console.error(
    chalk.red(chalk`Gracefully handling our error: {white ${error}}`)
  );
});

log(
  chalk.red(
    chalk`We have {black.bgWhite.bold  ${ticketManager.listenerCount(
      'buy'
    )} } listener(s) for the {green.underline buy} event\n`
  )
);
log(
  chalk.red(
    chalk`We have {black.bgWhite.bold  ${ticketManager.listenerCount(
      'error'
    )} } listener(s) for the {green.underline error} event\n`
  )
);

const onBuy = () => {
  log(chalk.magentaBright.inverse('I will be removed soon\n'));
};

ticketManager.on('buy', onBuy);

log(
  chalk.red(
    chalk`We added a new event listener bringing our total count for the {green.underline buy} event to: {black.bgWhite.bold  ${ticketManager.listenerCount(
      'buy'
    )} }\n`
  )
);
ticketManager.buy('test@email', 20);

ticketManager.off('buy', onBuy);

log(
  chalk.red(
    chalk`We now have: {black.bgWhite.bold  ${ticketManager.listenerCount(
      'buy'
    )} } listener(s) for the {green.underline buy} event\n`
  )
);
ticketManager.buy('test@email', 20);

ticketManager.removeAllListeners('buy');
log(
  chalk.red(
    chalk`We have {black.bgWhite.bold  ${ticketManager.listenerCount(
      'buy'
    )} } listeners for the {green.underline buy} event\n`
  )
);
ticketManager.buy('test@email', 20);
log(chalk.white('The last ticket was bought😛'));
