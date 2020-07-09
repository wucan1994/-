Object.defineProperty(Object, 'assign', {
    value: function assign(target, varArgs) {
        'use strict';
        if (target === null || target === undefined) {
            throw new TypeError('cannot convert null or undefined to object');
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];

            if (nextSource !== null && nextSource !== undefined) {
                for (var nextKey in nextSource) {
                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
        }

        return to;
    },
    configurable: true,
    writable: true
});

function MyAssign(target, varArgs) {
    'use strict';
    if (target === null || target === undefined) {
        throw new TypeError('cannot convert null or undefined to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource !== null && nextSource !== undefined) {
            for (var nextKey in nextSource) {
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                    to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }

    return to;
}

var obj = {
    a: 1,
    b: [1, 2],
    c: {
        d: 1
    },
    f: 'hi'
};

var obj1 = MyAssign({}, obj);
console.log(obj1);
obj.c.d = 2;
console.log(obj, obj1);
