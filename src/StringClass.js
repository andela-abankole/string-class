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

/**
 * [toUpper find any lowercase character between the brackets]
 * @return {[String]}  [Returns all characters in uppercase]
 */
String.prototype.toUpper = function() {
  var patt  = /[a-z]/gi,
      _this = this,
      str;
  /**
   * [upper matches the unicode character and subtracts 32]
   * @param  {[String]} txt [contain regex solution]
   * @return {[String]}     [convert `str` value to characters]
   */
  function upper(txt) {
    str = txt.charCodeAt(0) - 32;
    return String.fromCharCode(str);
  }

  return _this.replace(patt, upper);
};

