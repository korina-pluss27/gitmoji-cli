import fs from 'fs'

const commitMsg = () => {
  try {
    console.log(process.argv)
    const commitMsg = fs.readFileSync(process.argv[3], 'utf8')
    const firstWord = commitMsg.split(' ')[0]
    if (!fistWord.startsWith(':') || !firstWord.endsWith(':')) {
      throw new Error()
    }
  } catch (error) {
    console.log('Commit message does not begin with an emoji')
    process.exit(1)
  } finally {
    process.exit(0)
  }
}

export default commitMsg
