import { useWatcher, type Watcher } from '@dephub/layer';

import { jsonBuilderConfig } from '#/utils/config.ts';

/**
 * Watcher function configured to monitor JSON files and trigger builds.
 *
 * @param layerConfig Optional partial Layer configuration overrides.
 * @returns A promise that resolves when watching finishes or exits early.
 * @throws If a non-`Error` value is thrown during a rebuild.
 * @example
 * ```ts
 * import { watcher } from '@dephub/json-layer';
 * import { s } from '@dephub/schema';
 *
 * await watcher({
 *   contentDir: './content/services',
 *   docType: 'Service',
 *   exclude: ['temp'],
 *   outDir: './dist/services',
 *   schemas: {
 *     'tech-support': s.object({
 *       name: s.string(),
 *       pages: s.number(),
 *     }),
 *     'web-development': s.object({
 *       title: s.string(),
 *     }),
 *   },
 *   transformers: {
 *     'tech-support': (data) =>
 *       // `data` is fully typed as `{ name: string, pages: number }`
 *       ({ ...data, processed: true }),
 *     'web-development': (data) =>
 *       // `data` is fully typed as `{ title: string }`
 *       ({ ...data, processed: true }),
 *   },
 * });
 * ```
 */
export const watcher: Watcher<unknown> = await useWatcher(jsonBuilderConfig);
