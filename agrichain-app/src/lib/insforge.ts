import { createClient } from '@insforge/sdk';

export const insforgeClient = createClient({
  baseUrl: 'https://tbq84i2h.us-east.insforge.app',
  anonKey: 'ik_1fcd946e5bece0035f69573f81157290'
});

export const insforge = insforgeClient;
