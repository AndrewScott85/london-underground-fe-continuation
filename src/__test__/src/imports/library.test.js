const secondsToHms = require('../../../imports/library');

describe('coverts seconds to hours, minutes and seconds', () => {
    it('given 0 returns empty string', () => {
        expect(secondsToHms(0)).toBe('');
    });

    it('given 10000 returns 2h47', () => {
        expect(secondsToHms(10000)).toBe('2h47');
    });

    it('given 1000 returns 17m', () => {
        expect(secondsToHms(1000)).toBe('17m');
    });
});
