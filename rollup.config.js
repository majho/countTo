import babel from 'rollup-plugin-babel';

export default {
    entry: 'src/index.js',
    moduleName: 'countTo',
    format: 'umd',
    plugins: [babel({ exclude: 'node_modules/**' })],
    dest: 'dist/count-to.js'
};
