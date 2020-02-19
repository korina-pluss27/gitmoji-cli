// @flow
const MSG_HOOK: Object = {
  PERMISSIONS: 0o775,
  PATH: '/hooks/commit-msg',
  CONTENTS: `#!/bin/sh
# gitmoji as a commit hook
exec < /dev/tty
gitmoji --message $1
`
}

export default MSG_HOOK
