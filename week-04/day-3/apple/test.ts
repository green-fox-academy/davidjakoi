'use strict'

import { test } from 'tape';
import { Apple } from './apple';


test('create an apple pls', t => {
    let apple1 = new Apple();
    t.equal(apple1.getApple(), 'apple');
    t.end();
});

