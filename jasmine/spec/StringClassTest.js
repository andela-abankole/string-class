describe('String Class', function() {
  describe('Case for hasVowels', function() {
    var str;
    it('should return true for `Alien`', function() {
      str = 'Alien';
      expect(str.hasVowels()).toBeTruthy();
    });

    it('should return true for `space`', function() {
      str = 'space';
      expect(str.hasVowels()).toBeTruthy();
    });

    it('should be a typeof `Boolean`', function() {
      str = 'humans';
      expect(typeof str.hasVowels()).toEqual(typeof true);
    });
  });

  describe('Case for toUpper', function() {
    var str;
    it('should return `MOON` for `moon`', function() {
      str = 'moon';
      expect(str.toUpper()).toEqual('MOON');
    });

    it('should return `PLUTO` for `Pluto`', function() {
      str = 'pluto';
      expect(str.toUpper()).toEqual('PLUTO');
    });

    it('should be a typeof `String`', function() {
      str = 'diamond';
      expect(typeof str.toUpper()).toEqual(typeof 'DIAMOND');
    });
  });

  describe('Case for toLower', function() {
    var str;
    it('should return `jupiter` for `JUPITER`', function() {
      str = 'JUPITER';
      expect(str.toLower()).toEqual('jupiter');
    });

    it('should return `sun` for `SUN`', function() {
      str = 'SUN';
      expect(str.toLower()).toEqual('sun');
    });

    it('should be a typeof `String`', function() {
      str = 'BLUE';
      expect(typeof str.toLower()).toEqual(typeof 'blue');
    });
  });  

  describe('Case for ucFirst', function() {
    var str;
    it('should return `Saturn` for `saturn`', function() {
      str = 'saturn';
      expect(str.ucFirst()).toEqual('Saturn');
    });

    it('should return `Black Hole` for `black hole`', function() {
      str = 'black hole';
      expect(str.ucFirst()).toEqual('Black Hole');
    });

    it('should be a typeof `String`', function() {
      str = 'solar';
      expect(typeof str.ucFirst()).toEqual(typeof 'Solar');
    });
  });

  describe('Case for isQuestion', function() {
    var str;
    it('should return true for `Is there moon?`', function() {
      str = 'Is there moon?';
      expect(str.isQuestion()).toBeTruthy();
    });

    it('should return true for `Are there black holes?`', function() {
      str = 'Are there black holes?';
      expect(str.isQuestion()).toBeTruthy();
    });

    it('should be a typeof `Boolean`', function() {
      str = '?Are we going';
      expect(typeof str.isQuestion()).toEqual(typeof false);
    });
  });

  describe('Case for words', function() {
    var word,
        expectedWords;
    it('should return ["Mars", "has", "red", "sand"] for `Mars has red sand`, and an instanceof Array', function() {
      expectedWords = ['Mars', 'has', 'red', 'sand'];
      word = 'Mars has red sand';

      expect(word.words()).toEqual(expectedWords);
      expect(expectedWords instanceof Array).toBeTruthy();
    });

    it('should be a typeof `Object`', function() {
      word = 'Here we are';
      expectedWords = ['Here', 'we', 'are'];
      expect(typeof word.words()).toEqual(typeof expectedWords);
    });
  });

  describe('Case for wordCount', function() {
    var str;
    it('should return 1 for `Galaxy`', function() {
      str = 'Galaxy';
      expect(str.wordCount()).toEqual(1);
    });

    it('should return 4 for `Mercury is really hot`', function() {
      str = 'Mercury is really hot';
      expect(str.wordCount()).toEqual(4);
    });

    it('should be a typeof `Number`', function() {
      str = 'Hello World';
      expect(typeof str.wordCount()).toEqual(typeof 2);
    });
  });

  describe('Case for toCurrency', function() {
    var str;
    it('should return `11,111.11` for `11111.11`', function() {
      str = '11111.11';
      expect(str.toCurrency()).toEqual('11,111.11');
    });

    it('should return `100,000.00` for `100000.00`', function() {
      str = '1000000.00';
      expect(str.toCurrency()).toEqual('1,000,000.00');
    });

    it('should be a typeof `String`', function() {
      str = '110000.00';
      expect(typeof str.toCurrency()).toEqual(typeof '110,000.00');
    });
  });

  describe('Case for fromCurrency', function() {
    var str;
    it('should return `11111.11` for `11,111.11`', function() {
      str = '11,111.11';
      expect(str.fromCurrency()).toEqual(11111.11);
    });

    it('should return `100000.00` for `100,000.00`', function() {
      str = '100,000.00';
      expect(str.fromCurrency()).toEqual(100000.00);
    });

    it('should return `0.00` for `0.00`', function() {
      str = '0.00';
      expect(str.fromCurrency()).toEqual(0.00);
    });

    it('should be a typeof `Number`', function() {
      str = '11,000.00';
      expect(typeof str.fromCurrency()).toEqual(typeof 11000.00);
    });
  });
});
