function number (init) { this.v = init; }
number.prototype.get = function () { return this.v; }
number.prototype.dup = function () { return new number (this.v); }
number.prototype.incr = function (n) { this.v = this.v + n; }
number.prototype.print = function () { window.alert (this.to_string ()); }
number.prototype.to_string = function () { return ("<" + this.v + ">") }

function Calculator (init) { this.value = init; }
Calculator.prototype.add = function (v) { this.value.incr (v.get ());}
Calculator.prototype.result = function () { return this.value;}
Calculator.prototype.print = function () { return this.value.print ();}