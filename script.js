function Phone(brand, price, color, camera) {
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.camera = camera;
}
Phone.prototype.printInfo = function() {
  console.log("This phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". It has " + this.camera + "Mpix camera");
}
 var iPhone6S = new Phone("Apple", 2550, "silver", 20);
var samsungGalaxyS6 = new Phone('Samsung', 1500, "black", 15);
var onePlusOne = new Phone('Huawei', 1300, 'black', 40);

iPhone6S.printInfo();