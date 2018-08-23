'use strict'

import { test } from 'tape';
import { Summarize } from './sum';

test('check if it is equal', t =>{
    let mySum: Summarize = new Summarize();
    t.equal(mySum.sumOfNumbers([2,3,4]),9);
    t.end();

})