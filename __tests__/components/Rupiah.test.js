const formatRupiah = require('../../src/components/Rupiah');

describe('Test format rupiah', () => {
  test('should change format to rupiah', () => {
    expect(formatRupiah('10000', 'rupiah')).toBe('Rp. 10.000');
  });
  test('should change format to rupiah', () => {
    expect(formatRupiah('690000', 'rupiah')).toBe('Rp. 690.000');
  });
});
