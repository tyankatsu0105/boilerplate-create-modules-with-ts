import { sum } from '../sum';

describe('sum', () => {
  it('Will return sum', () => {
    const result = sum(1, 5);

    expect(result).toBe(6);
  });
});
