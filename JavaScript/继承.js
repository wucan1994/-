/**
 * 原型链
 * 基本思想：利用原型使一个引用类型继承另一个引用类型的属性和方法
 * 缺点：
 * 1.包含引用类型值的原型，所有实例属性会共享该引用类型的属性；
 * 2.创建子类型的实例时，没有办法在不影响所有对象实例的情况下，向超类型的构造函数中传递参数。
 */
function A() {}
function B(){}
B.prototype = new A();
var b = new B();

/**
 * 借助构造函数（伪造对象或经典继承）
 * 基本思想：在子类型的构造函数内部调用超类型的构造函数
 * 优点：可以在子类型的构造函数中向超类型构造函数中传递参数。
 * 缺点：
 * 1.方法在构造函数中定义，无法实现函数复用；
 * 2.在超类型的原型中定义的方法，对子类型而言是不可见的，结果所有类型只能使用构造函数模式。
 */
function Super() {}
function Sub() {
    Super.call(this);
}
var s = new Sub();

/**
 * 组合继承（伪经典继承）：是JavaScript中最常用的继承模式
 * 基本思想：利用原型链实现对原型属性和方法的继承，通过借用构造函数实现对实例属性的继承
 * 优点：
 * 1.既实现了函数复用，又保证了每个实例都有自己的属性
 * 2.可以使用instanceof和isPrototypeOf()识别基于组合继承创建的对象
 * 缺点：无论什么情况下，都会调用两次超类型的构造函数，一次是创建子类型原型的时候，一次是子类型构造函数内部。
 */
function Parent() {}
function Child() {
    Parent.call(this);
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;
var c = new Child();

/**
 * 原型式继承
 * 基本思想：借助原型基于已有的对象创建对象
 * 缺点：和使用原型链一样，包含引用类型值的属性始终会共享相应的值。
 * ES5通过新增Object.create()方法规范了原型式继承：
 * 这个方法接收两个参数：一个用作新对象原型的对象和（可选的）一个为新对象定义额外属性的对象。
 * 第二参数定义的属性会覆盖原型对象上的同名属性。
 */
function object(o) {
    function F() {};
    F.prototype = o;
    return new F();
}
var e = {};
var f = object(e);

/**
 * 寄生式继承
 * 基本思想：创建一个仅用于封装继承过程的函数，该函数在内部以某种方式增强对象，最后返回对象
 * 使用场景：主要考虑对象而不是自定义类型和构造函数的情况。
 */
function extend(original) {
    var clone = object(original);
    clone.sayHi = function() {
        console.log('Hi');
    }
    return clone;
}
var o = {};
var t = extend(o);

/**
 * 寄生组合式继承：引用类型最理想的继承方式
 * 基本思想：通过借用构造函数继承属性，通过原型链的混成形式继承方法。实际上是在组合继承的基础上，用超类型的副本代替调用超类型的构造函数给子类型指定原型
 * 本质上：使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型
 * 优点：
 * 1.只调用了一次超类型的构造函数
 * 2.避免了在子类型的原型上创建不必要的、多余的属性
 * 3.能够正常使用instanceof和isPrototypeOf()
 */
function inherite(subtype, supertype) {
    var f = object(supertype.prototype);
    f.constructor = subtype;
    subtype.prototype = f;
}
function SuperType() {}
function SubType() {
    SuperType.call(this);
}
inherite(SubType, SuperType);

/**
 * 继承多个对象：使用混入方式
 */
function SuperClass() {}

function OtherSuperClass() {}

function MyClass() {
    SuperClass.call(this);
    OtherSuperClass.call(this);
}

MyClass.prototype = Object.create(SuperClass.prototype);
Object.assign(MyClass.prototype, OtherSuperClass.prototype);
MyClass.prototype.constructor = MyClass;

MyClass.prototype.myMethod = function() {}