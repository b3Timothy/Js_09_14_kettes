let text = "*";

// 1
for (let i = 1; i <= 5; i++) {
  console.log(text.repeat(i));
}
console.log();

// 2
for (let i = 1; i <= 5; i++) {
  console.log(text.repeat(i).padStart(5, " "));
}
console.log();

// 3
for (let i = 1; i <= 5; i++) {
  console.log(" ".repeat(5 - i) + (text + " ").repeat(i));
}
console.log();

// 4
for (let i = 5; i >= 1; i--) {
  console.log(text.repeat(i));
}
console.log();

// 5
for (let i = 5; i >= 1; i--) {
  console.log(text.repeat(i).padStart(5, " "));
}
console.log();

///// Szorgalmi /////

// 1
for (let i = 1; i <= 5; i++) {
  console.log(
    " ".repeat(5 - i) +
      (i > 1 ? "**" : "*").split("")[0].concat(" ".repeat(5 - 1)),
  );
}
console.log();
