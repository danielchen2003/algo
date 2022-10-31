var canCompleteCircuit = function (gas, cost) {
  let len = gas.length
  let cycle_gas = [...gas, ...gas]
  let cycle_cost = [...cost, ...cost]

  for (let i = 0; i < cycle_cost.length; i++) {
    let cur_gas_cost = 0
    let found = true
    for (let j = i; j < i + len; j++) {
      cur_gas_cost = cur_gas_cost + cycle_gas[j] - cycle_cost[j]
      if (cur_gas_cost < 0) {
        found = false
        break
      }
    }
    if (found) {
      return i
    }
  }
  return -1
}
