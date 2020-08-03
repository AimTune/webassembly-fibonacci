import "./App.css";
import { fibonacciRust } from "../add/src/lib.rs";
function fibonacciJS(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return fibonacciJS(n - 1) + fibonacciJS(n - 2);
  }
}
for (let i = 1; i <= 30; i++) {
  console.time("🖤Rust " + i);
  var sayi = fibonacciRust(i);
  console.timeEnd("🖤Rust " + i);

  console.time("❤️JS " + i);
  var sayi2 = fibonacciJS(i);
  console.timeEnd("❤️JS " + i);
}
