import fs from 'fs'

const commitMsg = () => {
  try {
    console.log(process.argv)
    const fd = fs.readFileSync(process.argv[3])
    console.log(fd)
  } catch (error) {
    console.error(error)
    process.exit(1)
  } finally {
    process.exit(0)
  }
}

export default commitMsg
