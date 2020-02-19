import fs from 'fs'

const commitMsg = () => {
  try {
    console.log(process.argv)
  } catch (error) {
    console.error(error)
    process.exit(1)
  } finally {
    process.exit(0)
  }
}

export default commitMsg
