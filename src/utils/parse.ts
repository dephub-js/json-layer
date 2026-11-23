import { readFile } from '@dephub/read';

export async function parseJson(path: string): Promise<unknown> {
  const raw = await readFile(path);

  return JSON.parse(raw);
}
