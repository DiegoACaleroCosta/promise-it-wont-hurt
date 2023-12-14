const { argv } = require('node:process');

function parsePromised() {
    promise = new Promise((fulfill, reject) => {

        try {
            const parse = JSON.parse(argv[2])
            fulfill(parse);
        } catch (error) {
            reject(error.message);
        }

    })
    promise.then(console.log).catch(console.log);

}

parsePromised();