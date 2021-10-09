const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat(name) {
  const copyOfCats = cats.slice();
  copyOfCats.push(name);
  return copyOfCats;
}

function prependCat(name) {
    const copyOfCats = cats.slice();
    copyOfCats.unshift(name);
    return copyOfCats;
  }

  function removeLastCat() {
      const copyOfCats = cats.slice();
      copyOfCats.pop();
      return copyOfCats;
  }

  function removeFirstCat() {
    const copyOfCats = cats.slice();
    copyOfCats.shift();
    return copyOfCats;
}
