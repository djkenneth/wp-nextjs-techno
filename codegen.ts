
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://dev-techno-kenneth.pantheonsite.io/graphql",
  documents: "graphql/**/*.graphql",
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "types/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
      },
      plugins: [
        {
          'typescript-operations': {
            globalNamespace: true,
          },
        },
      ]
    },
    'graphql/sdk.ts': {
      plugins: [
        {
          'typescript-react-apollo': {
            withHooks: false,
            useTypeImports: true,
          },
        },
      ],
    }
  },

  // hooks: {
  //   afterAllFileWrite: ['eslint --fix', 'prettier --write'],
  // },
};

export default config;
