const schedule = require('../index')

class Student {
  constructor(name) {
    this.name = name
  }
}

describe('#schedule', () => {
  const buildNumArray = (first, last) => {
    const array = []
    for (let i = first; i <= last; i++) {
      array.push(i)
    }
    return array
  }

  const isSameGame = (game, otherGame) => {
    return (
      (game[0] === otherGame[0] && game[game.length - 1] === otherGame[otherGame.length - 1]) ||
      (game[game.length - 1] === otherGame[0] && game[0] === otherGame[otherGame.length - 1])
    )
  }

  const checkPairings = pairings => {
    pairings.forEach((games, day) => {
      games.forEach((game, gameId) => {
        pairings.forEach((otherGames, otherDay) => {
          if (day === otherDay) {
            return
          }
          otherGames.forEach((otherGame, otherGameId) => {
            if (gameId != otherGameId && isSameGame(game, otherGame)) {
              throw 'Game duplicate found!'
            }
          })
        })
      })
    })
  }

  for (let i = 2; i <= 20; i++) {
    it(`is correct for ${i} numbers`, () => {
      const numArray = buildNumArray(1, i)
      const pairings = schedule(numArray)
      expect(() => checkPairings(pairings)).not.toThrow()
    })
  }

  it('works with different data types', () => {
    const students = [
      new Student('sarah'),
      new Student('bob'),
      new Student('sally'),
      new Student('mike'),
      new Student('dave')
    ]
    const pairings = schedule(students)
    expect(() => checkPairings(pairings)).not.toThrow()
  })
})
