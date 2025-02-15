// 1. IS_OBJECT: Проверьте, является ли элемент именно простым объектом, а не массивом, null и т.п. Вернуть true если это объект, false в противном случае.
//    Аргумент может быть объектом или не объектом\*\*
//    Ожидаемый результат: ({ a: 1 }) => true, ([1, 2, 3]) => false 

function IS_OBJECT(a) {
    return typeof a === 'object' 
            && a !== null 
            && !Array.isArray(a) 
            && Object.prototype.toString.call(a) === '[object Object]';
}

let userObject = { a: 1 }
let userArray = [1, 2, 3]
let userNull = null

console.log(`1. IS_OBJECT:` + IS_OBJECT(userObject))
console.log(`1. IS_OBJECT:` + IS_OBJECT(userArray))
console.log(`1. IS_OBJECT:` + IS_OBJECT(userNull))




// 2. KEY_VALUE: Вернуть массив пар, вложенными массивами вида [[key, value], [key, value]].
// Аргумент: Объект
// Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]


const KEY_VALUE = {
        a: 1, 
        b: 2 
    };

const arrayPair = Object.entries(KEY_VALUE);
console.log('2. KEY_VALUE:' + arrayPair); 



// 3. DELETE_OF_PROPERTY: Вернуть новый объект без указанных значений.
// Аргумент: Объект и название свойств, которые нужно удалить
// Ожидаемый результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }


const DELETE_OF_PROPERTY = (obj, ...props) => {
    const { ...rest } = obj;
    props.forEach(prop => delete rest[prop]);
    return rest;
};


const obj = { a: 1, b: 2 };
console.log('3. DELETE_OF_PROPERTY:' + DELETE_OF_PROPERTY(obj, 'b')); // { a: 1, c: 3 }


const obj2 = { a: 1, b: 2 };
console.log('3. DELETE_OF_PROPERTY:' + DELETE_OF_PROPERTY(obj2, 'b', 'd')); // { a: 1, c: 3 }




// 4. IS_EQUAL: Сделайте поверхностное сравнение двух объектов. Верните true, если объекты идентичны, false если объекты разные. 
// Аргумент: Два объекта
// Ожидаемый результат: ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true


function IS_EQUAL(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) {
        return false;
    }
    return keys1.every(key => obj1[key] === obj2[key]);
}

console.log('4. IS_EQUAL:' + IS_EQUAL({ a: 1, b: 1 }, { a: 1, b: 1 })); // true
console.log('4. IS_EQUAL:' + IS_EQUAL({ a: 1, b: 1 }, { a: 1, b: 2 })); // false
