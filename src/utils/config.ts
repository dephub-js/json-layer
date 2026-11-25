import type { BuilderConfig } from '@dephub/layer';

import { parseJson } from '#/utils/parse.ts';

export const jsonBuilderConfig: BuilderConfig<unknown> = {
  defaultOutDir: '.json-layer',
  name: __PKG_NAME__.split('/')[1],
  outExtension: '.json',
  parser: parseJson,
  pattern: '**/*.json',
  version: __PKG_VERSION__,
};
