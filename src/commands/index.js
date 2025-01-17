// @flow
import commit from './commit'
import config from './config'
import hook from './hook'
import list from './list'
import search from './search'
import update from './update'
import message from './message'

export default {
  commit,
  config,
  createHook: hook.create,
  list,
  removeHook: hook.remove,
  search,
  update,
  message
}
