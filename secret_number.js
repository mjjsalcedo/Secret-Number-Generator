'use strict';
module.exports = function() {

    let generatedNumber = (Math.random()*1000000);

    return function (){
      return generatedNumber;

    };

  };

