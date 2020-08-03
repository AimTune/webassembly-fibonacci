#[allow(non_snake_case)]
#[no_mangle]
fn fibonacciRust(n: u32) -> u32 {
  match n {
    0 => 1,
    1 => 1,
    _ => fibonacciRust(n - 1) + fibonacciRust(n - 2),
  }
}
