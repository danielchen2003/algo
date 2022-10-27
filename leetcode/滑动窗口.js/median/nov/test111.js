var a = true
var b = true

// First Case (Single-Line)
if (a && b) {
  console.log("_fist")
}
// Output: "bar"

var c = true
var d = true
// Second Case (Nested)
if (c) {
  if (d) {
    console.log("fist")
  }
}
