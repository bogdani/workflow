var style = require('./style/globalStyle.scss');
//var style = require('./style/globalStyle.scss');
//var messages = require('./components/messages');

var header = require('./components/header.js');

//import Button from './button';
//import floare from './components/Image';
//console.log(Button);
//var newMessage = () => (Button.button);
/*
var newMessage = () => (`
  <div class="${style.box}">
  <p>${messages.hi} ${messages.event}</p>
  </div>
  `);
var app = document.getElementById('app');
app.innerHTML = newMessage();
*/
//Button.attachEl();


if (module.hot) {
    module.hot.accept();
}
