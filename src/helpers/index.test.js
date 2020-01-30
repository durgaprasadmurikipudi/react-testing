import { getLetterMatchCount } from './index';

describe('getLetterMatchCount', () => {
  const secretWord = 'party';
  test('returns 0 when there are no matching letters', () => {
    const letterCount = getLetterMatchCount('bones', secretWord);
    expect(letterCount).toBe(0);
  });

  test('returns 3 when there are 3 matching letters', () => {
    const letterCount = getLetterMatchCount('train', secretWord);
    expect(letterCount).toBe(3);
  });

  test('returns correct count when there are duplicate letters as well', () => {
    const letterCount = getLetterMatchCount('parka', secretWord);
    expect(letterCount).toBe(3);
  });
});