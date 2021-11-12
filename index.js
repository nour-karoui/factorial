const express = require("express");
const factorial = require('factorial');
const app = express();

app.get('/:id', (req, res, next) => {
    const factorialResult = factorial(parseInt(req.params.id));
    res.status(200).send(`factorial of ${req.params.id} is ${factorialResult}`);
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})
