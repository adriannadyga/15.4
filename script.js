'use strict'
//funkcja konstruująca klasy (telefony), jako argumenty przyjmuje markę, cenę, kolor, aparat
function Phone(brand, price, color, camera) {
  this.brand = brand; //dodawanie parametrów za pomocą this
  this.price = price;
  this.color = color;
  this.camera = camera;
}

// za pomocą prototypu tworzę dla klasy Phone metodę opisującą telefon za pomocą console.log
Phone.prototype.printInfo = function() {
  console.log("This phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". It has " + this.camera + "Mpix camera");
}

//tworzę obiekty przedstawiające poszczególne modele
var iPhone6S = new Phone("Apple", 2550, "silver", 20);
var samsungGalaxyS6 = new Phone('Samsung', 1500, "black", 15);
var onePlusOne = new Phone('Huawei', 1300, 'black', 40);

//wywołanie info na temat obiektu za pomocą metody printInfo
iPhone6S.printInfo();