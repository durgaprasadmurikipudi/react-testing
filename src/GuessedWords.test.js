import GuessedWords from './GuessedWords';
import { setup, findByTestAttr } from '../test/test-utils';

const defaultProps = { guessedWords: [{ guessedWord: 'train', matchedLetters: 5 }] };

const getWithDefaultProps = props => ({ ...defaultProps, ...props});

describe('when no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup(GuessedWords, { guessedWords: [] });
  });

  it('renders without any error and also renders instructions to guess a word', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-instruction');
    expect(component.text().length).toBeGreaterThan(0);
  });
});

describe('when there is guessed words list', () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: 'cool', matchedLetters: 2},
    { guessedWord: 'racha', matchedLetters: 4},
    { guessedWord: 'masthi', matchedLetters: 1}
  ];

  beforeEach(() => {
    wrapper = setup(GuessedWords, { guessedWords });
  });

  it('renders without any error', () => {
    let component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  it('renders correct number of guessed words', () => {
    let component = findByTestAttr(wrapper, 'component-guessed-word');
    expect(component.length).toBe(guessedWords.length);
  });

  it('', () => {});
});

