/* global module */
// # electric-circuit-calculator
//
// A simple, literate statistics system. The code below uses the
// [Javascript module pattern](http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth),
// eventually assigning `electric-circuit-calculator` to `ecc` in browsers or the
// `exports object for node.js
(function() {

    var ecc = {};

    if (typeof module !== 'undefined') {
        // Assign the `ecc` object to exports, so that you can require
        // it in [node.js](http://nodejs.org/)
        module.exports = ecc;
    } else {
        // Otherwise, in a browser, we assign `ecc` to the window object,
        // so you can simply refer to it as `ecc`.
        this.ecc = ecc;
    }

    // # [Voltage divider](http://en.wikipedia.org/wiki/Voltage_divider)
    //
    // Returns the voltage in vout
    function voltage_divider(vin, r1, r2){
        return (vin*r2)/(r1+r2) || null;
    };
    ecc.voltage_divider = voltage_divider;

})(this);
