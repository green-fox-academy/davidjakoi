import {test} from 'tape';
import {anagramm} from './anagram'


test('Anagram function should return true', (t) => {
  const actual = anagramm('was','saw');
  const expected = true;
  t.equal( actual, expected, 'It has to be true cause this is anagram!');
  t.end();
})