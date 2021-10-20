# Ticket Manager App

In this project, I learn how to use Node.js's Event Emitter class to create a Ticket Manager. I followed the [Using Event Emitters in Node.js](http://feitingair.com/using-event-emitters-in-node-js.html) tutorial by [Stack Abuse](https://stackabuse.com/).

When someone buys a ticket, an event called 'buy' is sent, which includes details about who purchased the ticket. This is done by the _buy_ method in the Ticket Manager class.

```javascript
buy(email, price) {
  this.emit('buy', email, price, Date.now());
}
```

- the Ticket Manager class extends the Event Emitter class, so this can be done

To buy a ticket:

```javascript
ticketManager.buy('test@email', 20);
```

An event listener will wait for that 'buy' event, and once it is sent, the ticket manager will send an email to confirm the purchase and put info about the purchase into a database. A faux email and database addition will print onto the console instead.

```javascript
ticketManager.on('buy', (email, price, timestamp) => {
  emailService.send(email);
  databaseService.save(email, price, timestamp);
});
```

We emit an 'error' event when there are no more tickets available for purchase. An event listener for the 'error' event will print an error message when it is triggered.

```javascript
//in Ticket Manager class
this.emit('error', new Error('error'));

//index.js
ticketManager.on('error', (error) => {
  //error message
});
```

We can remove a single event listener only if it is assigned to a variable.

```javascript
const onBuy = () => {
  //do stuff
};
ticketManager.on('buy', onBuy); //listener is on
ticketManager.off('buy', onBuy); //listener is off
```

However, we can remove all event listeners that listen for the same event.

```javascript
ticketManager.removeAllListeners('buy');
```

To keep track of how many event listeners we have, we use the _listenerCount_ method in the Event Emitter class and specify the name of the event. Updates are printed onto the console.

```javascript
ticketManager.listenerCount('buy'); //returns number of event listeners for specified event
```

Every step printed onto the console is colored using the **chalk** npm module. For example:
![example of console output](/images/console-screenshot.png)

# runtime environment
- [Node.js](https://nodejs.org/en/)

# npm modules
- [chalk](https://www.npmjs.com/package/chalk/v/2.4.2)

# dev dependencies
- [nodemon](https://nodemon.io/)
- [ESlint](https://eslint.org/)
- [Prettier](https://prettier.io/)

# Author
Emma Grey [@emgrey02](https://github.com/emgrey02)


