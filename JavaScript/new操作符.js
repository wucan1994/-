/**
 * 使用new操作符调用构造函数创建实例，实际上做了以下操作：
 * 1.一个继承自构造函数的原型的新对象被创建
 * 2.使用指定的参数调用构造函数，并将this绑定到新创建的对象
 * 3.由构造函数返回的对象就是new表达式的结果。如果构造函数没有显示返回一个对象，则使用步骤1创建的对象
 * 
 * 注：new Foo等同于new Foo()，也就是没有指定参数列表，Foo不带任何参数调用的情况
 * 
 * 手动实现new操作符的时候可以按照以下5步来：
 * 1.创建一个新对象
 * 2.将新对象链接到构造函数的原型上
 * 3.将构造函数的作用域赋给新对象(绑定this)
 * 4.执行构造函数中的代码(为这个新对象添加属性)
 * 5.返回新对象
 */
function create() {
    let obj = {};
    let Con = [].shift.call(arguments);
    obj.__proto__ = Con.prototype;
    console.log(this)
    let result = Con.apply(obj, arguments);
    return typeof result === 'object' ? result : obj;
}

/**
 * 简洁版实现
 */
function myNew(Func, ...args) {
    let obj = Object.create(Func.prototype);
    let result = Func.apply(Func, args);
    return typeof result === 'object' ? result : obj;
}

function F(){}
var f = create(F)
console.log(f.constructor === F, typeof f, f instanceof F, F.prototype.isPrototypeOf(f))
var foo = create(F)
console.log(foo.constructor === F, typeof foo, foo instanceof F, F.prototype.isPrototypeOf(foo))