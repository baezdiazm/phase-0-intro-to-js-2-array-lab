// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}

function appendCat(name) {
    return [...cats, name]
}

function prependCat(name) {
    return [name, ...cats]
}

function removeLastCat() {
    let catsNew = cats.slice(0,cats.length+1)
    catsNew.pop()
    return catsNew
}

function removeFirstCat() {
    let catsNew = cats.slice(0,cats.length+1)
    catsNew.shift()
    return catsNew
}