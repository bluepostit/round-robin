# Round Robin Scheduler

Given an array of players, the `schedule` function returns an array of pairings, such that each player is paired with every other player.

This is a translation from Ruby into JavaScript of @ssaunier's [Round Robin Tournament](https://github.com/ssaunier/round_robin_tournament).

## Usage

```js
const schedule = require('@bluepostit/round-robin')

const colors = ['red', 'orange', 'yellow', 'green']
const colorPairings = schedule(colors)
console.log(colorPairings)

// Output should be:
[
  [ [ 'red', 'orange' ], [ 'yellow', 'green' ] ],
  [ [ 'yellow', 'orange' ], [ 'green', 'red' ] ],
  [ [ 'green', 'orange' ], [ 'red', 'yellow' ] ]
]


const teams = ['first', 'second', 'third']
const teamPairings = schedule(teams)
console.log(teamPairings)

// Output should be
[
  [ [ 'first', 'second' ], [ 'third', null ] ],
  [ [ 'third', 'second' ], [ null, 'first' ] ],
  [ [ null, 'second' ], [ 'first', 'third' ] ]
]
```
