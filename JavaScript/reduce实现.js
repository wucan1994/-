Array.prototype.myReduce = function (callback) {
    if (this === null) {
        throw new TypeError('Array.prototype.reduce call on null or undefined');
    }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + 'is not a function');
    }

    let o = Object(this);
    let value;
    let k = 0;
    let len = o.length;
    if (arguments.length > 1) {
        value = arguments[1];
    } else {
        while (k < len && !(k in o)) {
            k++;
        }
        if (k >= len) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        value = o[k++];
    }

    while (k < len) {
        if (k in o) {
            value = callback(value, o[k], k, o);
        }
        k++;
    }
    return value;
}