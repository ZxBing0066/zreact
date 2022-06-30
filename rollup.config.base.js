import tsPlugin from '@rollup/plugin-typescript';
import path from 'path';
import jsx from 'rollup-plugin-jsx';
import { terser } from 'rollup-plugin-terser';

const cwd = process.cwd();
const resolvePath = _path => path.resolve(cwd, _path);

const getConfig = name => ({
    input: resolvePath('./index.ts'),
    output: [
        {
            file: 'cjs/index.cjs',
            format: 'cjs',
            exports: 'auto',
            sourcemap: true
        },
        {
            file: 'esm/index.js',
            format: 'es',
            sourcemap: true
        },
        {
            file: 'umd/index.js',
            format: 'umd',
            name,
            globals: {
                react: 'React'
            }
        },
        {
            file: 'umd/index.min.js',
            format: 'umd',
            name,
            globals: {
                react: 'React'
            },
            sourcemap: true,
            plugins: [terser()]
        }
    ].map(output => ({
        ...output,
        file: resolvePath(output.file)
    })),
    plugins: [tsPlugin(), jsx({ factory: 'React.createElement' })],
    external: ['react']
});

export default getConfig;
