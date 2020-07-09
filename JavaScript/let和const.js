
/**
 * babel转换时，在let和const声明的变量名前加下划线，避免在块级作用域之外访问到该变量
 */

// 如:
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i); // 没有这一行（即不在块级作用域之外访问变量）时，会直接将let转换成var，不在变量名前加下划线。

// babel会将其转换成如下形式：
for (var _i = 0; _i < 10; _i++) {
    console.log(_i);
}
console.log(i);

/**
 * 自己实现let时，使用立即执行匿名函数
 */
(function() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
})();
console.log(i);

/**
 * 自己实现const时，使用Object.defineProperty()
 */
function __const(obj, name, value) {
    obj['constant'] = value;
    Object.defineProperty(obj, name, {
        get: function() {
            return obj['constant']
        },
        set: function() {
            throw new TypeError('assignment to a constant variable.');
        }
    })
}
var person = {};
__const(person, 'a', 10);
person.a = 10; // 报错

/**
 * 这里主要涉及到三个知识点：
 * 1.对象的属性类型：数据属性([[Configurable]]、[[Enumerable]]、[[Writable]]、[[Value]])和访问器属性([[Configurable]]、[[Enumerable]]、[[Get]]、[[Set]])。
 * 这两种属性都使用Object.defineProperty()方法定义。
 * 2.严格模式与非严格模式下getter函数与setter函数不同时定义时的区别。
 * 3.node与chrome中的全局变量的区别
 */