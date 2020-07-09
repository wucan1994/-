/**
 * call的实现
 * @param {*} thisArg 
 * @param  {...any} args 
 */
Function.prototype.myCall = function(thisArg = window, ...args) {
    const fn = Symbol('fn');
    thisArg[fn] = this;
    let result = thisArg[fn](...args);
    delete thisArg[fn];
    return result;
}

Function.prototype.myApply = function(thisArg = window, args) {
    const fn = Symbol('fn');
    thisArg[fn] = this;
    let result = thisArg[fn](...args);
    delete thisArg[fn];
    return result;
}

Function.prototype.myBind = function (thisArg, ...args) {
    var self = this
    // new优先级
    var fbound = function () {
        self.call(this instanceof self ? this : thisArg, ...args.concat(Array.prototype.slice.call(arguments)))
    }
    // 继承原型上的属性和方法
    fbound.prototype = Object.create(self.prototype);

    return fbound;
}

//测试
const obj = { name: 'xfb' }
function foo() {
    console.log(this.name)
    console.log(arguments)
}

let f = foo.myBind(obj, 'a', 'b', 'c')
f()
new f()

/**
 * 问题：arguments在浏览器中被实现为数组，在node中被实现为对象？
 * myBind这里还不太懂
 */
