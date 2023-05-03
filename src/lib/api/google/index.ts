import { PRIVATE_GOOGLE_CLIENT_SECRET } from '$env/static/private'
import { PUBLIC_GOOGLE_CLIENT_ID } from '$env/static/public'
import { google } from 'googleapis'

export function generateAuthUrl(
	url: URL,
	scopes: string[],
	redirectUrl?: string,
	prompt = 'consent'
) {
	if (!redirectUrl) redirectUrl = url.pathname

	const redirect_uri = `${url.origin}/callback/google`
	const client = new google.auth.OAuth2(
		PUBLIC_GOOGLE_CLIENT_ID,
		PRIVATE_GOOGLE_CLIENT_SECRET,
		redirect_uri
	)

	return client.generateAuthUrl({
		access_type: 'offline',
		response_type: 'code',
		prompt,
		scope: scopes,
		redirect_uri,
		state: redirectUrl
	})
}
