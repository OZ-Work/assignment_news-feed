import { CodegenConfig } from "@graphql-codegen/cli";
import { POINT_URI } from "./src/constants/api";

const config: CodegenConfig = {
  schema: POINT_URI,
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
