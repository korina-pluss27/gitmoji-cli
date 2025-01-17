// @flow
import fs from 'fs'
const { exec } = require('child_process')
import { type Answers } from '../prompts'

const withHook = (answers: Answers) => {
  try {
    const scope = answers.scope ? `(${answers.scope}): ` : ''
    const title = `${answers.gitmoji} ${scope}${answers.title}`
    const commitMessage = `${title}`
    fs.writeFileSync(process.argv[3], commitMessage);
  } catch (error) {
    console.error(error)
    process.exit(1)
  } finally {
    process.exit(0)
  }
}

export default withHook
