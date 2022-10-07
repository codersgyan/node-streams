const {Transform} = require('stream');

const replaceWordProcessing = new Transform({
    transform(chunk, encoding, callback) {
        // replaceWordProcessing.emit('error', new Error('something went wrong'));
        const finalString = chunk.toString().replaceAll(/ipsum/gi, 'cool');
        callback(null, finalString);
        // console.log('chunk', chunk.toString());
    }
});

module.exports = replaceWordProcessing;