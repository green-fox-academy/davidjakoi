import { test } from 'tape';
import { howMuch,books,numberOfBooks } from "./potter";


test('how much', t => {

 
  t.equal(howMuch(books, numberOfBooks), 'csicska vagy');
  t.end();

});

