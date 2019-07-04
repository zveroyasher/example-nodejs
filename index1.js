var events=require('events');
var util = require('util');

var myEmit = new events.EventEmitter();

myEmit.on('some_event', function(text){
  console.log(text);
});

myEmit.emit('some_event','Обработчик событий сработал');

var Cars= function(model) {
  this.model=model;

}
