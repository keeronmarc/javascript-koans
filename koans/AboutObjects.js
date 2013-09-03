describe("About Objects", function () {

  describe("Properties", function () {
    var meglomaniac;

    beforeEach(function () {
       meglomaniac = {  mastermind: "Joker", henchwoman: "Harley" };
    });

    it("should confirm objects are collections of properties", function () {
      expect(meglomaniac.mastermind).toBe("Joker");
    });

    it("should confirm that properties are case sensitive", function () {
      expect(meglomaniac.henchwoman).toBe("Harley");
      expect(meglomaniac.henchWoman).toBe(undefined);
    });
  });


  it("should know properties that are functions act like methods", function () {
    var meglomaniac = {
      mastermind : "Brain",
      henchman: "Pinky",
      battleCry: function (noOfBrains) {
        return "They are " + this.henchman + " and the" +
          Array(noOfBrains + 1).join(" " + this.mastermind);
      }
    };

    var battleCry = meglomaniac.battleCry(4);
    expect(meglomaniac.battleCry(4)).toMatch(battleCry);
  });

  it("should confirm that when a function is attached to an object, 'this' refers to the object", function () {
    // creates "instance" of date
    var currentDate = new Date()
    var currentYear = (currentDate.getFullYear());
    var meglomaniac = {
      mastermind: "James Wood",
      henchman: "Adam West",
      birthYear: 1970,
      calculateAge: function () {
        return currentYear - this.birthYear;
      }
    };

    expect(currentYear).toBe(2013);
    expect(meglomaniac.calculateAge()).toBe(43);
  });

  describe("'in' keyword", function () {
    var meglomaniac;
    beforeEach(function () {
    // the object/variable meglomaniac has properties/object variables(mastermind, henchman, etc) and values ("the Monarch and Dr Girlfriend") attached to the object 
    // every variable created is an object with properties/values associated with it
      meglomaniac = {
        mastermind: "The Monarch",
        henchwoman: "Dr Girlfriend",
        theBomb: true
      };
    });

    it("should have the bomb", function () {

      var hasBomb = "theBomb" in meglomaniac;

      expect(hasBomb).toBe(true);
    });

    it("should not have the detonator however", function () {

      var hasDetonator = "theDetonator" in meglomaniac;

      expect(hasDetonator).toBe(false);
    });
  });

  it("should know that properties can be added and deleted", function () {
    var meglomaniac = { mastermind : "Agent Smith", henchman: "Agent Smith" };

    expect("secretary" in meglomaniac).toBe(false);

// access the properties/object variables of an object by using dot notation
    meglomaniac.secretary = "Agent Smith";
    // by checking to determine if secretary property exists, evaluate to 
    // true/false
    expect("secretary" in meglomaniac).toBe(true);

    delete meglomaniac.henchman;
    expect("henchman" in meglomaniac).toBe(false);
  });


  it("should use prototype to add to all objects", function () {
    // created object type "Circle" using constructor function
    // created object of type "Function"
    // created Function for object type Circle
    // the property's value (name: Ford) based on the values
    // passed to the function 
    // So if put Circle(10), 10 is the number passed to the function
    // that becomes the value of the property "radius"
      function Circle(radius)
      {
        this.radius = radius;
      }

// create an "instance" of the object with the new constructor
      var simpleCircle = new Circle(10);
      var colouredCircle = new Circle(5);
      colouredCircle.colour = "red";

// object variable/property "colour" has been declared here, but not assigned a value
// therefore the result will be undefined
// undefined is property of global object or variable that has not been defined
// in this case the object variable/property colour
      expect(simpleCircle.colour).toBe(undefined);
// property value passed as an empty string so therefore has value of false/true
// ie false since nothing declared
      expect("colour" in simpleCircle).toBe(false);
      expect(colouredCircle.colour).toBe("red");

// Functions are pre-defined objects inherit(get) from prototype chain: 
// (a) 4 properties - characteristics of objects (length(no of args), name, constructor, caller(shows the function that called a specific function)) and 
// (b) methods (property of object - nested as a function) : apply, call, toSource, toString

      Circle.prototype.describe = function () {
        return "This circle has a radius of: " + this.radius;
      };

      expect(simpleCircle.describe()).toBe("This circle has a radius of: 10");
      expect(colouredCircle.describe()).toBe("This circle has a radius of: 5");
  });
});

// for the entire Javascript and how it works 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FFunctions_and_function_scope
// the creator took functions which are function objects (or objects)
// that have properties and values associated with them 
// he then created functions known as Event handlers, Event handlers need an argument
// or parameter, and those are event targets (DOM element objects: window, element, and document objects). These are passed into function event handler () {
// var = { "" 
//  onfocus(a method or a function):  "";
//  click (a method): "";
// }
//}