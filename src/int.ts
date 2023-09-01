declare global {
  interface Number {
    isPositive(): boolean;
    isNegative(): boolean;
    isEven(): boolean;
    isOdd(): boolean;
    isZero(): boolean;
    isBetween(min: number, max: number): boolean;
    isDecimal(): boolean;
  }
}

Number.prototype.isPositive = function () {
  return this.valueOf() > 0;
};

Number.prototype.isNegative = function () {
  return this.valueOf() < 0;
};

Number.prototype.isEven = function () {
  return this.valueOf() % 2 === 0;
};

Number.prototype.isOdd = function () {
  return this.valueOf() % 2 !== 0;
};

Number.prototype.isZero = function () {
  return this.valueOf() === 0;
};

Number.prototype.isBetween = function (min: number, max: number) {
  return this.valueOf() >= min && this.valueOf() <= max;
};

Number.prototype.isDecimal = function () {
  return this.valueOf() % 1 !== 0;
};

export {};
