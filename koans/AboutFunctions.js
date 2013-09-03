describe("About Functions", function() {

  it("should declare functions", function() {

    function add(a, b) {
      return a + b;
    }

    expect(add(1, 2)).toBe(3);
  });

  it("should know internal variables override outer variables", function () {
    var message = "Outer";

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      var message = "Inner";
      return message;
    }

    expect(getMessage()).toBe("Outer");
    expect(overrideMessage()).toBe("Inner");
  // variables that are declared are not changed by the return function
    expect(message).toBe("Outer");
  });

  it("should have lexical scoping", function () {
    var variable = "top-level";
    function parentfunction() {
      var variable = "local";
      function childfunction() {
        return variable;
      }
      return childfunction();
    }
    expect(parentfunction()).toBe("local");
  });

  it("should use lexical scoping to synthesise functions", function () {

    function makeMysteryFunction(makerValue)
    {
      var newFunction = function doMysteriousThing(param)
      {
        return makerValue + param;
      };
      return newFunction;
    }
    var mysteryFunction3 = makeMysteryFunction(3);
    var mysteryFunction5 = makeMysteryFunction(5);
// Since it's a function within a function, it requires
// two args "...(3)(12)" -> End Result will be:
// so mysteryFunction3 = makeMysteryFunction(3)(10)+
// so mysteryFunction5 = makeMysteryFunction(5)(5)
    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(23);
  });

  it("should allow extra function arguments", function () {

    function returnFirstArg(firstArg) {
      return firstArg;
    }

    expect(returnFirstArg("first", "second", "third")).toBe("first", "second", "third");

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

// ok, so here requires two args and only one has been given, therefore 
// get the result undefined
    expect(returnSecondArg("only give first arg")).toBe(undefined);

    function returnAllArgs() {
      var argsArray = [];
      // .length counts the number of elements in the object
      for (var i = 0; i < arguments.length; i += 1) {
        // push adds 3 elements (string objects - first, second, third) 
        // to an array () and then into another array
        // args are automatically converted into an array
        // references string objects using arguments[0], arguments[1]
        // arguments.length is a property of the function object
        // and indicates how many arguments expected to take
        // 3 args ("first", "second", "third") in this cases
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FFunction%2Flength

        argsArray.push(arguments[i]);
      }
      return argsArray.join(",");
    }
    // .join creates a string out of the elements of an array
    expect(returnAllArgs("first", "second", "third")).toBe("first,second,third");
  });

  it("should pass functions as values", function () {

    var appendRules = function (name) {
      return name + " rules!";
    };

    var appendDoubleRules = function (name) {
      return name + " totally rules!";
    };

    var praiseSinger = { givePraise: appendRules };
    // returns a string in quotes
    expect(praiseSinger.givePraise("John")).toBe("John rules!");

// editing 
    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toBe("Mary totally rules!");

  });
});
