function toPostfix(infix) {
  let stack = []
  let s = ""
  for (let x of infix) {
    console.log(stack)
    console.log(s)
    if (/\d/.test(x)) s += x // add digit to output

    if (x == "(" || x == "^") stack.push(x) // '^' has the highest precedence

    if (x == "+" || x == "-") {
      while (stack.length && stack[stack.length - 1] != "(") {
        s += stack.pop() // remove '+', '-', '*', '/', '^' due to equal or higher precedence
      }
      stack.push(x) // then only add '+' or '-'
    }

    if (x == "*" || x == "/") {
      while (stack.length && !/[\(+-]/.test(stack[stack.length - 1])) {
        s += stack.pop() // remove '*', '/', '^' due to equal or higher precedence
      }
      stack.push(x) // then only add '*' or '/'
    }

    if (x == ")") {
      while (stack[stack.length - 1] != "(") {
        s += stack.pop() // remove all operators on top of first encountered '(' from top of stack
      }
      stack.pop() // remove '('
    }
  }

  while (stack.length) {
    s += stack.pop() // remove remaining operators from stack
  }
  return s
}

console.log(toPostfix("8+2*3^3+8^2+(3+2/2)"))

function toPostfix(infix) {
  var postFix = ""
  var operatorStack = []
  var operators = new Operators()

  infix.split("").forEach(function (token) {
    var operator = operators.getOperator(token)

    if (!operator) {
      postFix += token
      return
    }

    if (operator.isLeftParenthesis()) {
      operatorStack.push(operator)
      return
    }

    if (operator.isRightParenthesis()) {
      while (
        operatorStack.length &&
        !operatorStack[operatorStack.length - 1].isLeftParenthesis()
      )
        postFix += operatorStack.pop()
      operatorStack.pop()
      return
    }

    while (
      operatorStack.length &&
      operator.isNotPreceding(operatorStack[operatorStack.length - 1])
    )
      postFix += operatorStack.pop()
    operatorStack.push(operator)
  })
  while (operatorStack.length) postFix += operatorStack.pop()
  return postFix
}

var Operator = function (operatorSymbol, precedence, associativity) {
  this.operatorSymbol = operatorSymbol
  this.precedence = precedence
  this.associativity = associativity

  this.isNotPreceding = function (operator) {
    return (
      (this.associativity === "left" &&
        this.precedence <= operator.precedence) ||
      (this.associativity === "right" && this.precedence < operator.precedence)
    )
  }

  this.isLeftParenthesis = function () {
    return this.operatorSymbol === "("
  }

  this.isRightParenthesis = function () {
    return this.operatorSymbol === ")"
  }

  this.toString = function () {
    return this.operatorSymbol
  }
}

var Operators = function () {
  this.operators = [
    new Operator("(", 1, ""),
    new Operator(")", 1, ""),
    new Operator("+", 2, "left"),
    new Operator("-", 2, "left"),
    new Operator("*", 3, "left"),
    new Operator("/", 3, "left"),
    new Operator("^", 4, "right"),
  ]

  this.getOperator = function (operatorSymbol) {
    var filterredOperators = this.operators.filter(function (findOperator) {
      return findOperator.operatorSymbol === operatorSymbol
    })

    return filterredOperators.length ? filterredOperators[0] : null
  }
}
