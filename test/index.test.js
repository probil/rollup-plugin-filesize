import test from 'ava';
import filesize from '../src';

const code = 'Abaculuss velum in secundus cirpi! Sunt amicitiaes imperium peritus, bassus exemplares.';

test('fileSize should apply correct template', t => {
	const options = {
		render(opts, size) {
			return size;
		}
	};

	const z = filesize(options);
	const expected = '87 B';
	t.is(z.getData({dest: 'abc.js'}, code), expected)
});
