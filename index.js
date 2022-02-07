'use strict' 

function start(){
  console.log('Timer is running ...');
}
function test(){
  return false;
}
setInterval(function(){
  console.log('print after every 10 seconds ')
},10000);

start();
test();
