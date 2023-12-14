/* all = (promise1, promise2) => {
    
    promise0 = new Promise((fulfill, reject)=>{
        let counter = 0;
        promise1.then(counter++);
        promise2.then(counter++);
        if(counter == 2) {fulfill([,])}
    })
    
    return promise0;
} */

let counter = 0;
let values = new Array(2);

const incrementAndValidate = (i, fulfill, value) => {
    counter++;
    values[i] = value;
    if(counter == 2) {fulfill(values)}
}


all = (promise1, promise2) => {
    promise0 = new Promise((fulfill, reject)=>{
        promise1.then((value) => incrementAndValidate(0, fulfill, value));
        promise2.then((value) => incrementAndValidate(1, fulfill, value));
    })
    
    return promise0;
}

all(getPromise1(), getPromise2()).then(console.log);