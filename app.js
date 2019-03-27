//Storage controller

//Item controller
const ItemCtrl = (function() {
  //Item constructor
  const item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  //Data structure / state
  const data = {
    items: [
      { id: 0, name: "Chicken Parmesan", calories: 1200 },
      { id: 1, name: "Taco Dinner", calories: 700 },
      { id: 2, name: "Crab legs with butter", calories: 400 }
    ],
    currentItem: null,
    totalCalories: 0
  };

  return {
    logData: function() {
      return data;
    }
  };
})();

//UI controller
const UICtrl = (function() {
  //Public methods
  return {};
})();
//App controller
const App = (function(ItemCtrl, UICtrl) {
  //Public methods
  return {
    init: function() {}
  };
})(ItemCtrl, UICtrl);
//Initialize app
App.init();
