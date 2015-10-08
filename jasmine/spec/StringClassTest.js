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
});