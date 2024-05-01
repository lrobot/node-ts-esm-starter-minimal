import lodash from 'lodash'

import underscore from 'underscore'

const log = console.log
log('busybox')

log(underscore.invoke([[5, 1, 7], [3, 2, 1]], 'sort'))

log(lodash.chunk(['a', 'b', 'c', 'd'], 2))
log(lodash.concat([1], 2, [3], [[4]]))


