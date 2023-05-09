// map - a class, data structure that stores data in key-value pairs, keys could by any any data type

let map = new Map();

map.set("Alexey", "JavaScript"); // not just adding a value but updating as well
map.set("Alexey", "TypeScript");
map.set("Stepan", "Jira");
map.set("Alyona", "Python");

console.log(map.keys()); // fetching keys

console.log(map.has("Alexey")); // checking if there's a key in a map => true

console.log(map.get("Alexey")); // getting a value for a particular key

for (let [k, v] of map) { // fetching all keys and values
    console.log(k, " : ", v);
}

map.forEach((v, k) => { // IMPORTANT: this method first takes a value, then a key
    console.log(k, " : ", v);
});