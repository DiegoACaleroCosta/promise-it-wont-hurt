attachTitle = (name) => 'DR. ' + name;

promise = new Promise(function(fulfill, rejected){
    fulfill(`MANHATTAN`);
});

promise.then(attachTitle).then(console.log);