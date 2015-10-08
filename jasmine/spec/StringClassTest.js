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
});