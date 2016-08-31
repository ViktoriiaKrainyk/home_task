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

for (var i = 0; i < cars.car.length; i++) {
  var arrColor = arrColor || [];
  var arrMark = arrMark || [];
  var arrType = arrType || [];
arrColor.inArray(cars.car[i].color) || arrColor.push(cars.car[i].color);
arrMark.inArray(cars.car[i].mark) || arrMark.push(cars.car[i].mark);
arrType.inArray(cars.car[i].type) || arrType.push(cars.car[i].type);
};

var Cars = function() {};
Cars.prototype.color = Object.create(cars, {
  color: {
  value: arrColor
}
});
Cars.prototype.mark = Object.create(cars, {
  mark: {
  value: arrMark
}
});
Cars.prototype.type = Object.create(cars, {
  type: {
  value: arrType
}
});

var data = new Cars();
console.log(data.color);
console.log(data.mark);
console.log(data.type);
