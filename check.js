function mergeNestedObjects(obj1, obj2) {

    const concatUser = { ...obj1.user , ...obj2.user || {} };
    const concatSetting = { ...obj1.settings || {}, ...obj2.settings || {} };
    return {...obj1,...obj2, user:concatUser, settings:concatSetting,};
}

const obj1 = {

user: null

//name: 'Alice',

//age: 25

//},

//settings: {
//theme: 'light'
//}

};




const obj2 = {

user: {

age: 30,

city: 'Wonderland'

},

settings: {
notifications: true
}
};
const mergedObj = mergeNestedObjects(obj1, obj2);
console.log(mergedObj);