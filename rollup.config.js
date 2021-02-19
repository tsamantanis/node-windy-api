import typescript from 'rollup-plugin-typescript';
import { terser } from 'rollup-plugin-terser';
export default {
    input: 'src/index.ts',
    output: {
        file: 'umd/windyAPI.js',
        format: 'umd',
        name: 'windyAPI'
    },
    plugins: [
        typescript({
            typescript: require('typescript'),
        }),
        terser()
    ]
};
