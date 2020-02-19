// @flow
import fs from 'fs'
import execa from 'execa'
import ora from 'ora'

import HOOK from '../hook'
import MSG_HOOK from '../msg-hook'

const createHook = async () => {
  const spinner = ora('Creating the gitmoji commit hooks').start()

  try {
    const { stdout } = await execa('git', ['rev-parse', '--absolute-git-dir'])

    fs.writeFile(
      stdout + MSG_HOOK.PATH,
      MSG_HOOK.CONTENTS,
      { mode: MSG_HOOK.PERMISSIONS },
      (error) => {
        if (error) return spinner.fail(error)
        spinner.succeed('Gitmoji commit hook created successfully')
      }
    )
    fs.writeFile(
      stdout + HOOK.PATH,
      HOOK.CONTENTS,
      { mode: HOOK.PERMISSIONS },
      (error) => {
        if (error) return spinner.fail(error)
        spinner.succeed('Gitmoji commit hook created successfully')
      }
    )
  } catch (error) {
    spinner.fail(`Error: ${error}`)
  }
}

export default createHook
