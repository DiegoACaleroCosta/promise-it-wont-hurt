let promise = new Promise(function (fulfill, rejected){
    fulfill("I FIRED");
    rejected(new Error('I DID NOT FIRE'));
});

let onRejected = (error) => {
    console.log(error.message)
};

promise.then(msj => console.log(msj),onRejected);