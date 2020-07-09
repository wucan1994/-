/**
 * this永远指向最后调用它的那个对象
 * this出现的五种场景：
 * 1.作为普通函数被直接调用时，函数中的this指向
 * 2.作为对象的属性被调用时，函数中的this
 * 3.作为构造函数被调用时，函数中的this
 * 4.使用call、apply、bind改变函数中this的指向时，函数中的this
 * 5.箭头函数中的this
 */

/**
 * 1.作为普通函数被直接调用时，函数中的this指向window
 */
var a = 1;
function test() {
    console.log(this.a);
}
test(); // 非严格模式下，this指向window，打印结果为1，严格模式下，打印结果为undefined

/**
 * 2.作为对象的属性被调用时，函数中的this指向调用者
 */
var a = 1;
function test() {
    console.log(this.a);
}
var obj = {
    a: 2,
    test
}
obj.test(); // this指向obj，打印结果为2

/**
 * 特殊情况：setTimeout中调用
 */
var a = 1;
function test() {
    console.log(this.a);
}
var obj = {
    a: 2,
    test
}
setTimeout(obj.test); // 非严格模式下，this指向window，打印结果为1，严格模式下，打印结果为undefined
/**
 * 可以理解为：
 * var f = obj.test;
 * setTimeout(f);
 * 即：延迟执行时，实际上是作为普通函数在全局环境中直接被执行的，this指向window
 */

/**
 * 3.作为构造函数被调用时，函数中的this指向新创建的对象
 */
var a = 1;
function Test(a) {
    this.a = a;
}
var b = new Test(2);
console.log(b.a); // 打印结果为2

/**
 * 4.使用call、apply、bind改变函数中this的指向时，this指向call、apply、bind方法中传入的第一个参数
 */
var a = 1;
function foo() {
    console.log(this.a);
}
var obj = {
    a: 2
}
// var fooCopy = obj.foo;
foo(); // 非严格模式下，this指向window，打印结果为1，严格模式下，打印结果为undefined
foo.call(obj); // call改变了foo中this的指向，this指向obj

/**
 * 5.箭头函数不会创建其自身的执行上下文，所以箭头函数中的this取决于它的外部函数
 */
var b = 1;
function bar() {
    const foo =  () => {
        console.log(1234, this.b);
    }
    foo();
}
bar(); // foo中this的指向就是bar中this的指向，非严格模式下，this指向window，打印结果为1，严格模式下，打印结果为undefined
var testObj = {
    b: 2
}
bar.call(testObj); // foo中this的指向就是bar中this的指向，this指向testObj，打印结果就是2