/*!
 * tasks/git-hooks
 */

'use strict';

export default (grunt, options) => {
    return {
        hooks: {
            'pre-push': 'hooks/pre-push.sh'
        }
    };
};
