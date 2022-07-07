let cats=["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(Ralph) {
    cats.push("Ralph")
}
function destructivelyPrependCat(Bob) {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat (Broom) {
    return [...cats, "Broom"]
};
function prependCat (Arnold) {
    return ["Arnold", ...cats]
};
function removeLastCat () {
    cats.slice[4];
    return [...cats];
}