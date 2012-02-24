/**
* Chapter 3: Objects
*
* User: bryanmac
* Date: 1/11/12
*/

//
// Object Literals:
//      convenient notation (json) for create objects with values.
//      braces surrounding zero or more name/value pairs
//      anywhere an expression can appear
//

// zero params
var empty_object = {};
console.log("created empty object.");
console.log(JSON.stringify(empty_object));

// literal object with properties
// keys can be strings (required if keyword) or no quotes if not keyword
var person =
{
    "first-name": "John",        // key is string
    "last-name": "Doe",
    birthday: "2004-09-22 14:55" // not a keyword
};
console.log();
console.log("created literal person");
console.log(JSON.stringify(person));

// retrieve values by keying into the dictionary ([]) or . notation if not reserved word
console.log("first name:" + person["first-name"]);
console.log("last name:" + person["last-name"]);

// since birthday wasn't a reserved word, we can use . notation
console.log("birthday:" + person.birthday);

// non-existant members return 'undefined'
console.log("non-existant property: " + person.nonexistant);

// || can provide a default if undefined
console.log("default value: " + (person.nonexistant || "a default string"));

// you can delete a property (think dictionary)
delete person.birthday;
console.log("person after deleting birthday: " + JSON.stringify(person));
