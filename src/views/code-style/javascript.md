## JS文件规范

### 1. 前言

JavaScript(以下简称为JS)作为前端同学开发时经常打交道的一门语言，写出一手好的代码是作为Vantop FE应该遵循的基本职责。

本文档的目标是使JS代码风格保持一致，容易被理解和被维护。

虽然本文档是基于JS设计，但对其他JS预编译语言（如TypeScript、JSX等），适用的部分也应该尽量遵循本文档的约定。


### 2. 代码风格

#### 2.1 结构

##### 2.1.1 缩进

**[强制] 使用`4`个空格作为一个缩进层级，不允许使用`2`个空格或`tab`字符**

**[强制] `switch`下的`case`和`deafult`必须增加一个缩进层级**

解释

JS语言作为一门弱类型语言，多个块的嵌套是非常之多，2个空格的代码在识别块的时候就会比4个更不易识别，从这个角度上出发，推荐使用4个空格

示例:

```js
// good
switch (variable) {
    
    case '1':
        // do...
        break;
    case '2':
        // do...
        break;
    default:
        // do...
        break;

}

// bad
switch (variable) {

case '1':
    // do...
    break;
case '2':
    // do...
    break;
default:
    // do...
    break;

}

```



##### 2.1.2 空格

**[强制] 二元运算符两侧必须有一个空格，一元运算符与操作对象之间不允许有空格**

示例：

```js
let a = !arr.length;
a++;
a = b + c;
```



**[强制] 用作代码块起始的左花括号`{`前必须有一个空格**

示例：

```js
// good
if (condition) {

}
while (condition) {

}
function funcName() {

}

// bad
if (condition){

}
while (condition){

}
function funcName(){

}
```



**[强制] `if / else / for / while / function / switch / do / try / catch / finally` 关键字后，必须有一个空格。**

示例：

```js
// good
if (condition) {
}

while (condition) {
}

(function () {
})();

// bad
if(condition) {
}

while(condition) {
}

(function() {
})();
```



**[强制] 函数声明、具名函数表达式、函数调用中，函数名和 `(` 之间不允许有空格。**

```js
// good
function funcName() {
}

const funcName = function funcName() {
};

funcName();

// bad
function funcName () {
}

const funcName = function funcName () {
};

funcName ();
```



**[强制] `,` 和 `;` 前不允许有空格。如果不位于行尾，`,` 和 `;` 后必须跟一个空格。**

示例：

```js
// good
callFunc(a, b);

// bad
callFunc(a , b) ;
```



**[强制] 在函数调用、函数声明、括号表达式、属性访问、`if / for / while / switch / catch` 等语句中，`()` 和 `[]` 内紧贴括号部分不允许有空格。**

示例：

```js
// good

callFunc(param1, param2, param3);

save(this.list[this.indexes[i]]);

needIncream && (variable += increament);

if (num > list.length) {
}

while (len--) {
}


// bad

callFunc( param1, param2, param3 );

save( this.list[ this.indexes[ i ] ] );

needIncreament && ( variable += increament );

if ( num > list.length ) {
}

while ( len-- ) {
}
```



**[强制] 单行声明的数组与对象，如果包含元素，`{}` 和 `[]` 内紧贴括号部分不允许包含空格。**

解释：

声明包含元素的数组与对象，只有当内部元素的形式较为简单时，才允许写在一行。元素复杂的情况，还是应该换行书写。

示例：

```js
// good
const arr1 = [];
const arr2 = [1, 2, 3];
const obj1 = {};
const obj2 = {name: 'obj'};
const obj3 = {
    name: 'obj',
    age: 20,
    sex: 1,
};

// bad
const arr1 = [ ];
const arr2 = [ 1, 2, 3 ];
const obj1 = { };
const obj2 = { name: 'obj' };
const obj3 = {name: 'obj', age: 20, sex: 1};
```



**[强制] 行尾不得有多余的空格。**

**[强制] 声明对象、数组时，如果拥有多个属性或者值，需要添加尾后逗号，单行时可不添加。**

解释：

添加尾后逗号后，git等版本控制器在diff上可减少代码行数，提高开发效率。

示例：

```js
// good
const obj3 = {
    name: 'obj',
    age: 20,
    sex: 1,
};
const arr = [
  1,
  2,
];
const arr2 = [1, 2];

// bad
const obj3 = {
    name: 'obj',
    age: 20,
    sex: 1
};

const arr = [
  1,
  2
];
```



##### 2.2.1 换行

**[强制] 每个独立语句结束后必须换行。**

**[强制] 每行不得超过 `120` 个字符**。

解释：

超长的不可分割的代码允许例外，比如复杂的正则表达式。长字符串不在例外之列。

**[强制] 运算符处换行时，运算符必须在新行的行首。**

示例：

```js
// good
if (user.isAuthenticated()
    && user.isInRole('admin')
    && user.hasAuthority('add-admin')
    || user.hasAuthority('delete-admin')
) {
    // Code
}

let result = number1 + number2 + number3
    + number4 + number5;


// bad
if (user.isAuthenticated() &&
    user.isInRole('admin') &&
    user.hasAuthority('add-admin') ||
    user.hasAuthority('delete-admin')) {
    // Code
}

let result = number1 + number2 + number3 +
    number4 + number5;
```



**[强制] 在函数声明、函数表达式、函数调用、对象创建、数组创建、`for` 语句等场景中，不允许在 `,` 或 `;` 前换行。**

示例：

```js
// good
 const obj = {
    a: 1,
    b: 2,
    c: 3
};

foo(
    aVeryVeryLongArgument,
    anotherVeryLongArgument,
    callback
);


// bad
const obj = {
    a: 1
    , b: 2
    , c: 3
};

foo(
    aVeryVeryLongArgument
    , anotherVeryLongArgument
    , callback
);
```



**[建议] 不同行为或逻辑的语句集，使用空行隔开，更易阅读。**

示例：

```js
// 仅为按逻辑换行的示例，不代表setStyle的最优实现
function setStyle(element, property, value) {
    if (element == null) {
        return;
    }

    element.style[property] = value;
}
```

**[建议] 对于 `if...else...`、`try...catch...finally` 等语句，推荐使用在 `}` 号后添加一个换行 的风格，使代码层次结构更清晰，阅读性更好。**

示例：

```js
if (condition) {
    // some statements;
}
else {
    // some statements;
}

try {
    // some statements;
}
catch (ex) {
    // some statements;
}
```



##### 2.2.2 语句

**[强制] 不得省略语句结束的分号。**

**[强制] 在 `if / else / for / do / while` 语句中，即使只有一行，也不得省略块 `{...}`。**

示例：

```js
// good
if (condition) {
    callFunc();
}

// bad
if (condition) callFunc();
if (condition)
    callFunc();
```



**[强制] 函数定义结束不允许添加分号。**

示例：

```js
// good
function funcName() {
}

// bad
function funcName() {
};

// 如果是函数表达式，分号是不允许省略的。
const funcName = function () {
};
```



**[强制] `IIFE` 必须在函数表达式外添加 `(`，非 `IIFE` 不得在函数表达式外添加 `(`。**

解释：

IIFE = Immediately-Invoked Function Expression.

额外的 括号`(` 能够让代码在阅读的一开始就能判断函数是否立即被调用，进而明白接下来代码的用途。而不是一直拖到底部才恍然大悟。

示例：

```js
// good
const task = (function () {
   // Code
   return result;
})();

const func = function () {
};


// bad
const task = function () {
    // Code
    return result;
}();

const func = (function () {
});
```



**[强制] 箭头函数的参数只有一个，并且不包含解构时，参数部分的括号必须省略。**

示例：

```JS
// good
list.map(item => item * 2);

// good
let fetchName = async id => {
    let user = await request(`users/${id}`);
    return user.fullName;
};

// bad
list.map((item) => item * 2);

// bad
let fetchName = async (id) => {
    let user = await request(`users/${id}`);
    return user.fullName;
};
```



**[建议] 箭头函数的函数体只有一个单行表达式语句，且作为返回值时，省略 `{}` 和 `return`。**

如果单个表达式过长，可以使用 `()` 进行包裹。

示例：

```JS
// good
list.map(item => item * 2);

let foo = () => (
    condition
        ? returnValueA()
        : returnValueB()
);

// bad
list.map(item => {
    return item * 2;
});
```



**[建议] 箭头函数的函数体只有一个 `Object Literal`，且作为返回值时，使用 `()` 包裹。**

示例：

```JS\
// good
list.map(item => ({name: item[0], email: item[1]}));
```



**[强制] 解构多个变量时，如果超过行长度限制，每个解构的变量必须单独一行。**

解释：

太多的变量解构会让一行的代码非常长，极有可能超过单行长度控制，使代码可读性下降。

示例:

```JS
// good
let {
    name: personName,
    email: personEmail,
    sex: personSex,
    age: personAge
} = person;

// bad
let {name: personName, email: personEmail,
    sex: personSex, age: personAge
} = person;
```



#### 2.3 命名

**[强制] `变量` 使用 `Camel命名法`，并以名词作为前缀。**

示例：

```js
// good
let myName = 'Tom';

// bad
let setName = 'Tom';

```



**[强制] `常量` 使用 `全部字母大写，单词间下划线分隔` 的命名方式。**

示例：

```js
// good
const MY_CONST_VALUE = 'Tom';

// bad
const myConstValue = 'Tom';

```



**[强制] `函数` 使用 `Camel命名法`。**

示例：

```js
function stringFormat(source) {
}
```



**[强制] 函数的 `参数` 使用 `Camel命名法`。**

示例：

```js
function hear(theBells) {
}
```



**[强制] `类` 使用 `Pascal命名法`。**

示例：

```js
function TextNode(options) {
}
```



**[强制] 类的 `方法` / `属性` 使用 `Camel命名法`。**

示例：

```js
function TextNode(value, engine) {
    this.value = value;
    this.engine = engine;
}

TextNode.prototype.clone = function () {
    return this;
};
```



**[强制] `枚举变量` 使用 `Pascal命名法`，`枚举的属性` 使用 `全部字母大写，单词间下划线分隔` 的命名方式。**

示例：

```js
const TargetState = {
    READING: 1,
    READED: 2,
    APPLIED: 3,
    READY: 4,
};
```



**[强制] 由多个或一个单词组成的缩写词，在命名中，根据当前命名法和出现的位置，所有字母的大小写与首字母的大小写保持一致。**

示例：

```js
function XMLParser() {
}

function insertHTML(element, html) {
}

const httpRequest = new HTTPRequest();
```



**[强制] `类名` 使用 `名词`。**

示例：

```JS
function Engine(options) {
}
```



**[建议] `函数名` 使用 `动宾短语`。**

示例：

```JS
function getStyle(element) {
}
```



**[建议] `boolean` 类型的变量使用 `is` 或 `has` 开头。**

示例：

```JS
const isReady = false;
const hasMoreCommands = false;
```



**[建议] `Promise对象` 用 `动宾短语的进行时` 表达。**

示例：

```JS
const loadingData = ajax.get('url');
loadingData.then(callback);
```



#### 2.4 注释



##### 2.4.1 单行注释

**[强制] 必须独占一行。`//` 后跟一个空格，缩进与下一行被注释说明的代码一致。**

##### 2.4.2 多行注释

**[建议] 避免使用 `/*...*/` 这样的多行注释。有多行注释内容时，使用多个单行注释。**

##### 2.4.3 细节注释

对于内部实现、不容易理解的逻辑说明、摘要信息等，我们可能需要编写细节注释。

**[建议] 细节注释遵循单行注释的格式。说明必须换行时，每行是一个单行注释的起始。**

示例：

```
function foo(p1, p2, opt_p3) {
    // 这里对具体内部逻辑进行说明
    // 说明太长需要换行
    for (...) {
        ....
    }
}
```

**[强制] 有时我们会使用一些特殊标记进行说明。特殊标记必须使用单行注释的形式。下面列举了一些常用标记：**

解释：

1. TODO: 有功能待实现。此时需要对将要实现的功能进行简单说明。
2. FIXME: 该处代码运行没问题，但可能由于时间赶或者其他原因，需要修正。此时需要对如何修正进行简单说明。
3. HACK: 为修正某些问题而写的不太好或者使用了某些诡异手段的代码。此时需要对思路或诡异手段进行描述。
4. XXX: 该处存在陷阱。此时需要对陷阱进行描述。



### 3 语言特性



#### 3.1 变量

**[强制] 变量、函数在使用前必须先定义。使用`let`或`const`替换`var`。**

解释：

不通过关键字定义变量将导致变量污染全局环境。

示例：

```JS
// good
let name = 'MyName';

// bad
name = 'MyName';
```



**[建议] 原则上不建议使用全局变量，对于已有的全局变量或第三方框架引入的全局变量，需要根据检查工具的语法标识。**

示例：

```JS
/* globals jQuery */
let element = jQuery('#element-id');
```



**[强制] 每个 `let` 只能声明一个变量。**

解释：

一个 `let` 声明多个变量，容易导致较长的行长度，并且在修改时容易造成逗号和分号的混淆。

示例：

```JS
// good
let hangModules = [];
let missModules = [];
let visited = {};

// bad
let hangModules = [],
    missModules = [],
    visited = {};
```



**[建议]  定义对象时，如果所有键均指向同名变量，则所有键都使用缩写；如果有一个键无法指向同名变量，则所有键都不使用缩写。**

解释：

目的在于保持所有键值对声明的一致性。

示例：

```js
// good
let foo = {x, y, z};

let foo2 = {
    x: 1,
    y: 2,
    z: z
};


// bad
let foo = {
    x: x,
    y: y,
    z: z
};

let foo2 = {
    x: 1,
    y: 2,
    z
};
```



**[强制] 对于多次使用到的对象属性、数组的元素使用解构。**

解释：

不通过解构去使用变量时，每一次都将进行一遍查询操作，对性能有一定的影响。

示例：

```js
// good
const obj = {
  name: 'Tom',
  age: 12
};
const { name, age } = obj
callMyName(name);
setMyNameAndAge(name, age);

// bad
const obj = {
  name: 'Tom',
  age: 12
};
callMyName(obj.name);
setMyNameAndAge(obj.name, obj.age);

```



**[强制] 不要使用3层及以上的解构。**

解释：

过多层次的解构会让代码变得难以阅读。

示例：

```js
// bad
let {documentElement: {firstElementChild: {nextSibling}}} = window;
```



**[强制] 变量必须 `即用即声明`，不得在函数或其它形式的代码块起始位置统一声明所有变量。**

解释：

变量声明与使用的距离越远，出现的跨度越大，代码的阅读与维护成本越高。虽然JavaScript的变量是函数作用域，还是应该根据编程中的意图，缩小变量出现的距离空间。

示例：

```JS
// good
function kv2List(source) {
    let list = [];

    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            let item = {
                k: key,
                v: source[key]
            };

            list.push(item);
        }
    }

    return list;
}

// bad
function kv2List(source) {
    let list = [];
    let key;
    let item;

    for (key in source) {
        if (source.hasOwnProperty(key)) {
            item = {
                k: key,
                v: source[key]
            };

            list.push(item);
        }
    }

    return list;
}
```



#### 3.2 条件

**[强制] 在 Equality Expression 中使用类型严格的 `===`。仅当判断 `null` 或 `undefined` 时，允许使用 `== null`。**

解释：

使用 `===` 可以避免等于判断中隐式的类型转换。

示例：

```js
// good
if (age === 30) {
    // ......
}

// bad
if (age == 30) {
    // ......
}
```



**[建议] 尽可能使用简洁的表达式。**

示例：

```js
// 字符串为空

// good
if (!name) {
    // ......
}

// bad
if (name === '') {
    // ......
}

```

```js
// 字符串非空

// good
if (name) {
    // ......
}

// bad
if (name !== '') {
    // ......
}
```

```js
// 数组非空

// good
if (collection.length) {
    // ......
}

// bad
if (collection.length > 0) {
    // ......
}

```

```js
// 布尔不成立

// good
if (!notTrue) {
    // ......
}

// bad
if (notTrue === false) {
    // ......
}

```

```js
// null 或 undefined

// good
if (noValue == null) {
  // ......
}

// bad
if (noValue === null || typeof noValue === 'undefined') {
  // ......
}

```



**[建议] 按执行频率排列分支的顺序。**

解释：

按执行频率排列分支的顺序好处是：

1. 阅读的人容易找到最常见的情况，增加可读性。
2. 提高执行效率。

**[建议] 对于相同变量或表达式的多值条件，用 `switch` 代替 `if`。**

示例：

```js
// good
switch (typeof variable) {
    case 'object':
        // ......
        break;
    case 'number':
    case 'boolean':
    case 'string':
        // ......
        break;
}

// bad
const type = typeof variable;
if (type === 'object') {
    // ......
}
else if (type === 'number' || type === 'boolean' || type === 'string') {
    // ......
}
```



**[建议] 如果函数或全局中的 `else` 块后没有任何语句，可以删除 `else`。**

示例：

```js
// good
function getName() {
    if (name) {
        return name;
    }

    return 'unnamed';
}

// bad
function getName() {
    if (name) {
        return name;
    }
    else {
        return 'unnamed';
    }
}
```



#### 3.3 集合

**[建议] 对数组进行连接操作时，使用数组展开语法。**

解释：

用数组展开代替 `concat` 方法，数组展开对 `Iterable` 有更好的兼容性。

示例：

```js
// good
let foo = [...foo, newValue];
let bar = [...bar, ...newValues];

// bad
let foo = foo.concat(newValue);
let bar = bar.concat(newValues);
```



**[强制] 使用剩余运算符时，剩余运算符之前的所有元素必需具名。**

解释：

剩余运算符之前的元素省略名称可能带来较大的程序阅读障碍。如果仅仅为了取数组后几项，请使用 `slice` 方法。

示例：

```js
// good
let [one, two, ...anyOther] = myArray;
let other = myArray.slice(3);

// bad
let [,,, ...other] = myArray;
```



**[建议] 不要使用数组展开进行数组的复制操作。**

解释：

使用数组展开语法进行复制，代码可读性较差。推荐使用 `Array.from` 方法进行复制操作。

示例：

```js
// good
let otherArr = Array.from(arr);

// bad
let otherArr = [...arr];
```



**[建议] 尽可能使用 `for .. of` 进行遍历。**

解释：

使用 `for .. of` 可以更好地接受任何的 `Iterable` 对象，如 `Map#values` 生成的迭代器，使得方法的通用性更强。

以下情况除外：

1. 遍历确实成为了性能瓶颈，需要使用原生 `for` 循环提升性能。
2. 需要遍历过程中的索引。



**[建议] 程序运行过程中有添加或移除元素的操作时，使用 `Map` 和 `Set`。**

解释：

使用 `Map` 和 `Set`，程序的可理解性更好；普通 Object 的语义更倾向于表达固定的结构。

示例：

```js
// good
let membersAge = new Map();
membersAge.set('one', 10);
membersAge.set('two', 20);
membersAge.set('three', 30);
membersAge.delete('one');

// bad
let membersAge = {};
membersAge.one = 10;
membersAge.two = 20;
membersAge.three = 30;
delete membersAge['one'];
```



**[建议] 使用变量默认语法代替基于条件判断的默认值声明。**

解释：

添加默认值有助于引擎的优化。

示例：

```js
// good
function foo(text = 'hello') {
}

// bad
function foo(text) {
    text = text || 'hello';
}
```



#### 3.4 异步

**[强制] 回调函数的嵌套不得超过3层。**

解释：

深层次的回调函数的嵌套会让代码变得难以阅读。

示例：

```js
// bad
getUser(userId, function (user) {
    validateUser(user, function (isValid) {
        if (isValid) {
            saveReport(report, user, function () {
                notice('Saved!');
            });
        }
    });
});
```



**[建议] 使用 `Promise` 代替 `callback`。**

解释：

相比 `callback`，使用 `Promise` 能够使复杂异步过程的代码更清晰。

示例：

```js
// good
let user;
getUser(userId)
    .then(function (userObj) {
        user = userObj;
        return validateUser(user);
    })
    .then(function (isValid) {
        if (isValid) {
            return saveReport(report, user);
        }

        return Promise.reject('Invalid!');
    })
    .then(
        function () {
            notice('Saved!');
        },
        function (message) {
            notice(message);
        }
    );
```



### 4.上线规范

**[强制] 不允许提交无意义的注释以及测试时所用的console/alert等调试语句至线上环境。**

示例：

```js
// 春眠不觉晓
console.log('处处闻啼鸟');
```



**[强制] 不允许提交空函数**

示例：

```JS
function none() {
    
}
```
