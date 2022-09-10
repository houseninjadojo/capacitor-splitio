import { WebPlugin } from '@capacitor/core';

import type { SplitPlugin } from './definitions';

export class SplitWeb extends WebPlugin implements SplitPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
