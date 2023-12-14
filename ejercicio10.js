alwaysThrows = () => {throw "OH NOES"};

iterate = (initialValue = 1) => {
    console.log(initialValue);
    return initialValue+1
};

promise = Promise.resolve(iterate())

promise.then(iterate)
        .then(iterate)
        .then(iterate)
        .then(iterate)
        .then(alwaysThrows)
        .then(iterate)
        .then(iterate)
        .then(iterate)
        .then(iterate)
        .then(iterate)
        .catch(e=>console.log(e));