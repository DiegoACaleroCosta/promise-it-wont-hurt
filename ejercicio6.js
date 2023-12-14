let promise = Promise.resolve("FULFILL");

promise.then(console.log).catch(function (err){
    console.log("ERROR");
});