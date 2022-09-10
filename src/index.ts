import { registerPlugin } from '@capacitor/core';

import type { SplitPlugin } from './definitions';

const Split = registerPlugin<SplitPlugin>('Split', {
  web: () => import('./web').then(m => new m.SplitWeb()),
});

export * from './definitions';
export { Split };
