#!/usr/bin/env node
import { useCli } from '@dephub/layer';
import { writeLayerEntry } from '@dephub/layer-entry';

import { jsonBuilderConfig } from '#/utils/config.ts';

await useCli({
  defaultConfigPath: 'json-layer.config.ts',
  description: __PKG_DESCRIPTION__,
  tasks: [writeLayerEntry],
  ...jsonBuilderConfig,
});
