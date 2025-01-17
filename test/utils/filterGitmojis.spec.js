import filterGitmojis from '../../src/utils/filterGitmojis'
import * as stubs from './stubs'

describe('filterGirmojis', () => {
  it('should find all gitmojis with empty input', () => {
    const filteredGitmojis = filterGitmojis(undefined, stubs.gitmojis)

    expect(filteredGitmojis).toStrictEqual(stubs.gitmojis)
  })

  it('should should find the `Updating tests.` gitmoji first', () => {
    const filteredGitmojis = filterGitmojis('test', stubs.gitmojis)

    const gitmoji = stubs.gitmojis.find(
      (gitmoji) => gitmoji.name === 'white-check-mark'
    )
    expect(filteredGitmojis[0]).toStrictEqual(gitmoji)
  })

  it('should should find the `Introducing new features.` gitmoji first', () => {
    const filteredGitmojis = filterGitmojis('fea', stubs.gitmojis)

    const gitmoji = stubs.gitmojis.find(
      (gitmoji) => gitmoji.name === 'sparkles'
    )
    expect(filteredGitmojis[0]).toStrictEqual(gitmoji)
  })

  it('should should find the `Moving or renaming files.` gitmoji first', () => {
    const filteredGitmojis = filterGitmojis('move', stubs.gitmojis)

    const gitmoji = stubs.gitmojis.find((gitmoji) => gitmoji.name === 'truck')
    expect(filteredGitmojis[0]).toStrictEqual(gitmoji)
  })

  it('should should find the `Updating code due to external API changes.` gitmoji first', () => {
    const filteredGitmojis = filterGitmojis('alian', stubs.gitmojis)

    const gitmoji = stubs.gitmojis.find((gitmoji) => gitmoji.name === 'alien')
    expect(filteredGitmojis[0]).toStrictEqual(gitmoji)
  })
})
