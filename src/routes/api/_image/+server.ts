import type { RequestHandler } from '@sveltejs/kit';
import { requestHandler } from 'sveltekit-image/api';

export const GET: RequestHandler = requestHandler({});
