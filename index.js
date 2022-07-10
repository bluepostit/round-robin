function rotate(array) {
  const first = array.shift()
  array.splice(array.length, 0, first)
}

function schedule(members) {
  if (members.length % 2 !== 0) {
    members.push(null)
  }

  const n = members.length
  for (let i = 1; i <= n / 2; i++) {
    const [element] = members.splice(i, 1);
    members.splice(n - i, 0, element);
  }

  const pivot = members.pop()
  const games = []
  for (let i = 0; i < n - 1; i++) {
    const rest = []
    for (let j = 1; j < Math.floor(n / 2); j++) {
      rest.push([members[j], members[n - 1 - j]])
    }
    const day = [[members[0], pivot], ...rest]
    rotate(members)
    games.push(day)
  }
  return games
}

module.exports = schedule
