module.exports = {
  endOfLine: 'auto',
  jsxSingleQuote: false,
  printWidth: 90,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  importOrder: ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"]
};
