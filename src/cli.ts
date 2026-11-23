#!/usr/bin/env node
import { useCli } from '@dephub/layer';
import { writeLayerEntry } from '@dephub/layer-entry';

import { jsonBuilderConfig } from '#/utils/config.ts';
import { description } from '#/utils/pkg.ts';

await useCli({
  defaultConfigPath: 'json-layer.config.ts',
  description,
  tasks: [writeLayerEntry],
  ...jsonBuilderConfig,
});
