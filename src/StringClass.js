"use strict";

/**
 * [hasVowels find any character between the bracket,
 *            matches any character at least once.
 *            ]
 * @return {Boolean}  [Returns a boolean value if the string contains vowels]
 */
String.prototype.hasVowels = function() {
  var _this = this,
      patt = /[aeiou]+/i;

  return patt.test(_this) ? true : false;
};
