// @flow
const MSG_HOOK: Object = {
  PERMISSIONS: 0o775,
  PATH: '/hooks/commit-msg',
  CONTENTS: `#!/bin/sh
# gitmoji as a commit hook
if test -t 1 && ! grep -q -m 1 '^[^#]' $1; then
  # it has been invoked from a tty and no commit message is already set
  exec < /dev/tty
  gitmoji --message $1
fi
`
}

export default MSG_HOOK