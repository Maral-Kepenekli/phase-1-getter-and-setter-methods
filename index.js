class Circle {

 constructor(radius) {
  this.radius = radius;
 }

 get diameter() {
  return this.radius * 2;
 }

 get circumference() {
  return 2 * Math.PI * this.radius;
 }

 get area() {
  return Math.PI * (this.radius * this.radius);
 }

 set diameter(diameter) {
  this.radius = diameter / 2;
 }

 set circumference(circumference) {
  this.radius = circumference / (2 * Math.PI);
 }

 set area(area) {
  this.radius = Math.sqrt(area / Math.PI);
 }
}

const circle = new Circle(6);

//console.log(circle.diameter)
//console.log(circle.circumference)
//console.log(circle.area)

circle.radius = 18;

//console.log(circle.diameter)

circle.circumference = 100;
console.log(circle.radius);

circle.area = 200;
console.log(circle.radius)

