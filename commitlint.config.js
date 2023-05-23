// 编辑commitlint.config.js，导入.cz-config.js 中的自定义的规则项
const { types } = require('./.cz-config.js');
const typeList = types.map((item) => item.value);

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', typeList],
    // 'type-case': [0],
    // 'type-empty': [0],
    // 'scope-empty': [0],
    // 'scope-case': [0],
    // 'subject-full-stop': [0, 'never'],
    // 'subject-case': [0, 'never'],
    // 'header-max-length': [0, 'always', 72],
  },
};
