const EventEmitter = require('events');
const ud = new EventEmitter();

ud.on('greet', (name) => {
    console.log('hello there 28', name);
});

ud.on('exit', (num) => {
    console.log('thanku for visiting', num);
});

ud.emit('greet', 'rimjhim');
ud.emit('exit', 182);

class Button extends EventEmitter {
    click() {
        console.log('button clicked');
        this.emit('click', { timestamp: Date.now() });
    }
}

const button = new Button();
button.on('click', (event) => {
    console.log('button event has been clicked', event);
});

button.click();
