let HTTP = require("q-io/http");

HTTP.read("http://localhost:7000")
    .then(((res) => HTTP.read(`http://localhost:7001/${res}`)))
    .then((res) => console.log(JSON.parse(res)));
