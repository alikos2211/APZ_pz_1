class Iterator {
    constructor(el){
        //Клас, який в констуркотрі на вход приймає масив елементів
        this.index = 0;
        this.keys = Object.keys(el);
        // Якщо на вхід поступає масив, то ми формуємо масив з його ключей
        this.elements = el;
    }
    next(){
        return this.elements[this.keys[this.index++]];
        //Метод, який звертається до колекції до певного елемента та повертає ключі об'єкта
    }
    hasNext(){
        return this.index < this.keys.length;
        // Метод, який перевіряє наявність певного елемента в колекції чи вона не порожня
    }
};

const family = {
    mother:{name: 'Olha', age: '42', eyeColor: 'Green' },
    father:{name: 'Valeriy', age: '45',eyeColor: 'Brown' },
    sister:{name: 'Taisiia', age: '15',eyeColor: 'Brown' },
    me:{name: 'Olesia', age: '20',eyeColor: 'Green' },
}
//Створюємо об'єкт, що містить членів родини
const collection = new Iterator(family);

while(collection.hasNext()){
    console.log(collection.next());
    //Поки ми маємо елементи в колекції, виводимо їх
};