fn main() {
  println!("Hello, Rust!");
}

// another example
fn main1() {
  let s1 = String::from("Hello");
  let len = calculate_length(&s1);
  println!("Length of '{}' is {}.", s1, len);
}

fn calculate_length(s: &String) -> usize {
  s.len()
}
