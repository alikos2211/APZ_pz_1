class Iterator {
    constructor (el){
  //Клас, який в констуркотрі на вход приймає масив елементів
      this.index = 0;
      this.elements = el;
    }
    next (){
      return this.elements[this.index++];
   //Метод, який звертається до колекції до певного елемента
    }
    hasNext (){
      return this.index < this.elements.length;
  // Метод, який перевіряє наявність певного елемента в колекції чи вона не порожня
    }
  };
  const colorCollection = new Iterator (['Green', 'Yellow', 'Red', 'Grey']);
//Створюємо колекцію різних кольорів
  while ( colorCollection.hasNext()) {
//Поки ми маємо елементи в колекції, виводимо їх
    console.log(colorCollection.next());
  };