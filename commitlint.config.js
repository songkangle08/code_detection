// 编辑commitlint.config.js，导入.cz-config.js 中的自定义的规则项
const { types } = require("./.cz-config.js");
const typeList = types.map((item) => item.value);

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", typeList],
  },
};
