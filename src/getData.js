import gzip from 'gzip-size';
import fileSize from 'filesize';

export default opts => (bundle, code) => {
	let size = fileSize(Buffer.byteLength(code), opts.format);
	let gzipSize = opts.showGzippedSize
		? fileSize(gzip.sync(code), opts.format)
		: "";
	return opts.render(opts, size, gzipSize, bundle);
};
