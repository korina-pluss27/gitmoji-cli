// @flow
import fs from 'fs'

import { type Answers } from '../prompts'

const withHook = (answers: Answers) => {
  try {
    const scope = answers.scope ? `(${answers.scope}): ` : ''
    const title = `${answers.gitmoji} ${scope}${answers.title}`
    const commitMessage = `${title}`

    fs.writeFile(process.argv[3], commitMessage, err => {
      if (err) {
        console.error(err)
      }
      console.log("Commit message has been written")
    })
  } catch (error) {
    console.error(error)
    process.exit(1)
  } finally {
    process.exit(0)
  }
}

export default withHook
