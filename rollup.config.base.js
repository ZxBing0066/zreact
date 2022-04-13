import tsPlugin from '@rollup/plugin-typescript';
import path from 'path';
import jsx from 'rollup-plugin-jsx';

const cwd = process.cwd();
const resolvePath = _path => path.resolve(cwd, _path);

const config = {
    input: resolvePath('./index.ts'),
    output: [
        {
            file: 'cjs/index.cjs',
            format: 'cjs',
            exports: 'default',
            sourcemap: true
        },
        {
            file: 'esm/index.js',
            format: 'es',
            sourcemap: true
        }
    ].map(output => ({
        ...output,
        file: resolvePath(output.file)
    })),
    plugins: [tsPlugin(), jsx({ factory: 'React.createElement' })],
    external: ['react']
};

export default config;
