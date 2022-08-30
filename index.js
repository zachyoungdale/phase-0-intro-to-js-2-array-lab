// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}
destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}
destructivelyPrependCat();

function destructivelyRemoveLastCat() {
    return cats.pop();
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat() {
    return cats.shift();
}
destructivelyRemoveFirstCat();

function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
}
appendCat();

function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
}
prependCat();

function removeLastCat() {
    const newCats = cats.slice(0, -1);
    return newCats;
}
removeLastCat();

function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats;
} removeFirstCat();