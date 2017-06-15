'use strict';
module.exports = function() {

    var generatedNumber = (Math.random()*1000000);

    return function (){
      return generatedNumber;

    };

  };

