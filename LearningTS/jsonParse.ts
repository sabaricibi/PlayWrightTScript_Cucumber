let json = '{"name" : "sabari", "age" : "33", "hobbies" : [ {"indoor" : "chess", "outdoor" : "swimming"}, {"indoor" : "ludo", "outdoor" : "badmiton"}]}';

let jsonObj = JSON.parse(json);

console.log(jsonObj.name);
console.log(jsonObj.hobbies[1].indoor);