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

  //Public methods
  return {
    getItems: function() {
      return data.items;
    },
    logData: function() {
      return data;
    }
  };
})();

//UI controller
const UICtrl = (function() {
  const UISelectors = {
    itemList: "#item-list"
  };

  //Public methods
  return {
    populateItemList: function(items) {
      let html = "";

      items.forEach(function(item) {
        html += `<li class="collection-item" id="${item.id}">
              <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
              <a href="#" class="secondary-content">
                  <i class="edit-item fa fa-pencil"></i>
              </a>
          </li>`;
      });

      //Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    }
  };
})();
//App controller
const App = (function(ItemCtrl, UICtrl) {
  //Public methods
  return {
    init: function() {
      //Fetch items from data structure
      const items = ItemCtrl.getItems();

      //Populate list with items
      UICtrl.populateItemList(items);
    }
  };
})(ItemCtrl, UICtrl);

//Initialize app
App.init();
