const {Transform} = require('stream');

const uppercaseWordProcessing = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    }
});

module.exports = uppercaseWordProcessing;