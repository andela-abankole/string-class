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

/**
 * [toLower find any uppercase character between the brackets]
 * @return {[String]}  [Returns all characters in lowercases]
 */
String.prototype.toLower = function() {
  var patt  = /[A-Z]/gi,
      _this = this,
      str;

  /**
   * [upperToLower performs a search and replace,
   *               calls the lower() with `txt` argument,
   *               matches the unicode character and adds 32,
   *               converts the matched unicode character to ascii characters.
   *               ]
   * @return {[String]}
   */
  (function upperToLower() {
    str = _this.replace(patt, lower);
    function lower(txt) {
      return String.fromCharCode(txt.charCodeAt(0) + 32);
    }
    return str;
  })();

  return str;
};

/**
 * [ucFirst  capture group,
 *           find a character match at the end of a word,
 *           match a word character,
 *           match any character at least once
 *           ]
 * @return {[String]}  [convert first character of a word with toUpper method,
 *                      concat the two result,
 *                      convert strings at index 1 below in a word with toLower method
 *                      ]
 */
String.prototype.ucFirst = function() {
  return this.replace(/(\b\w)+/gi, function(txt){
    return txt.charAt(0).toUpper() + txt.substr(1).toLower();
  });
};

