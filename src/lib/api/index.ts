import { PUBLIC_BASE_URL } from '$env/static/public'
import { apiClient } from 'api'

export const api = apiClient(PUBLIC_BASE_URL)
