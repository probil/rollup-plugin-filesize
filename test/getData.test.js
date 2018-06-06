import test from 'ava';
import getData from '../src/getData';
const code = 'Abaculuss velum in secundus cirpi! Sunt amicitiaes imperium peritus, bassus exemplares.';

test('fileSize should return a string', t => {
	t.is(typeof getData()({dest: 'abc.js'}, code), 'string');
});

test('fileSize should return correct string', t => {
	t.true(getData({dest: 'abc.js'}, code).indexOf('87') >= 0)
});
