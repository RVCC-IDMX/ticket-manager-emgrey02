const chalk = require('chalk');
const { EventEmitter } = require('events');

const log = console.log;

class TicketManager extends EventEmitter {
  constructor(supply) {
    super();
    this.supply = supply;
  }

  buy(email, price) {
    this.supply--;
    this.emit('buy', email, price, Date.now());
  }
}

module.exports = TicketManager;
