describe('String Class', function() {
  describe('Case for hasVowels', function() {
    it('should return true for `Alien`', function() {
      var str = 'Alien';
      expect(str.hasVowels()).toBeTruthy();
    });

    it('should return true for `space`', function() {
      var str = 'space';
      expect(str.hasVowels()).toBeTruthy();
    });

    xit('should be a typeof `Boolean`', function() {

    });
  });

  describe('Case for toUpper', function() {
    it('should return `MOON` for `moon`', function() {
      var str = 'moon';
      expect(str.toUpper()).toEqual('MOON');
    });

    it('should return `PLUTO` for `Pluto`', function() {
      var str = 'Pluto';
      expect(str.toUpper()).toEqual('PLUTO');
    });

    xit('should be a typeof `String`', function() {

    });
  });

  describe('Case for toLower', function() {
    it('should return `jupiter` for `JUPITER`', function() {
      var str = 'JUPITER';
      expect(str.toLower()).toEqual('jupiter');
    });

    it('should return `sun` for `SUN`', function() {
      var str = 'SUN';
      expect(str.toLower()).toEqual('sun');
    });

    xit('should be a typeof `String`', function() {

    });
  });  

  describe('Case for ucFirst', function() {
    it('should return `Saturn` for `saturn`', function() {
      var str = 'saturn';
      expect(str.ucFirst()).toEqual('Saturn');
    });

    it('should return `Black Hole` for `black hole`', function() {
      var str = 'black hole';
      expect(str.ucFirst()).toEqual('Black Hole');
    });

    xit('should be a typeof `String`', function() {

    });
  });

  describe('Case for isQuestion', function() {
    it('should return true for `Is there moon?`', function() {
      var str = 'Is there moon?';
      expect(str.isQuestion()).toBeTruthy();
    });

    it('should return true for `Are there black holes?`', function() {
      var str = 'Are there black holes?';
      expect(str.isQuestion()).toBeTruthy();
    });

    xit('should be a typeof `Boolean`', function() {

    });
  });

  describe('Case for words', function() {
    it('should return ["Mars", "has", "red", "sand"] for `Mars has red sand`, and an instanceof Array', function() {
      var expectedWords = ["Mars", "has", "red", "sand"];
      var word = 'Mars has red sand';

      expect(word.word()).toEqual(expectedWords);
      expect(expectedWords instanceof Array).toBeTruthy();
    });

    xit('should be a typeof `Object`', function() {

    });
  });

  describe('Case for wordCount', function() {
    it('should return 1 for `Galaxy`', function() {
      var str = 'Galaxy';
      expect(str.wordCount()).toEqual(1);
    });

    it('should return 4 for `Mercury is really hot`', function() {
      var str = 'Mercury is really hot';
      expect(str.wordCount()).toEqual(4);
    });

    xit('should be a typeof `Number`', function() {

    });
  });

  describe('Case for toCurrency', function() {
    it('should return `11,111.11` for `11111.11`', function() {
      var num = 11111.11;
      expect(num.toCurrency()).toEqual('11,111.11');
    });

    it('should return `100,000.00` for `100000.00`', function() {
      var num = 100000.00;
      expect(num.toCurrency()).toEqual('100,000.00');
    });

    xit('should be a typeof `String`', function() {

    });
  });
});