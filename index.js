const callback = function () {
    return 2 + 2;
}

function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return callback;
}

function returnsAnAnonymousFunction() {
    return () => 2 + 2;
}