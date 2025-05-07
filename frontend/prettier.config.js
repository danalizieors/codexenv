const importRoots = Object.values({
    external: '^~.',
    absolute: '~',
    relative: '.',
})

const styleImports = importRoots.map((root) => `^[${root}].*\\.css$`)
const scriptImports = importRoots.map((root) => `^[${root}]`)

const importOrder = [...styleImports, '', ...scriptImports]

export default {
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    jsxSingleQuote: true,
    plugins: [
        '@ianvs/prettier-plugin-sort-imports',
        'prettier-plugin-tailwindcss',
    ],
    importOrder,
    tailwindFunctions: ['tw'],
}
