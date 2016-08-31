var cars = {
  car: [
    {
      color: "Blue",
      mark: "BMW",
      type: "business"
    },
    {
      color: "Red",
      mark: "BMW",
      type: "sport"
    },
    {
      color: "White",
      mark: "Toyota",
      type: "family"
    },
    {
      color: "Black",
      mark: "mercedes",
      type: "business"
    }
  ]
};

Array.prototype.inArray = function(value) {
  var some = this.some(function(elem){
    return elem === value;
  });
  return some;
};

function Cars(data) {

this.arrColor = [];
this.arrMark = [];
this.arrType = [];
this.murMur = function(data){
  var cars = data;
  for (var i = 0; i < cars.car.length; i++) {
    this.arrColor.inArray(cars.car[i].color) ||     this.arrColor.push(cars.car[i].color);
    this.arrMark.inArray(cars.car[i].mark) || this.arrMark.push(cars.car[i].mark);
    this.arrType.inArray(cars.car[i].type) || this.arrType.push(cars.car[i].type);
  };
};
};


var someCars = new Cars(cars);
someCars.murMur(cars);

Cars.prototype.color =  {
  color: someCars.arrColor
};
Cars.prototype.mark = {
  mark: someCars.arrMark
};
Cars.prototype.type = {
  type: someCars.arrType
};

console.log(someCars.color);
console.log(someCars.mark);
console.log(someCars.type);
