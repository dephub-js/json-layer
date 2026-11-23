import type { BuilderConfig } from '@dephub/layer';

import { parseJson } from '#/utils/parse.ts';
import { name, version } from '#/utils/pkg.ts';

const defaultName = 'json-layer';

export const jsonBuilderConfig: BuilderConfig<unknown> = {
  defaultOutDir: `.${defaultName}`,
  name: name.split('/')[1] ?? defaultName,
  outExtension: '.json',
  parser: parseJson,
  pattern: '**/*.json',
  version,
};
