// app/actions.ts

'use server';

import { IFormInput } from '@/app/page';

export async function handleMyFormSubmit(data: IFormInput) {
  console.log({ data });
}
