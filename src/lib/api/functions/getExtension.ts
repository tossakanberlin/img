import send from 'send'

send.mime.define({
	'image/avif': ['avif']
})

export function getExtension(contentType: string): string | null {
	const { mime } = send
	if ('getExtension' in mime) {
		// 2.0
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		return mime.getExtension(contentType)
	}
	// 1.0
	return (mime as any).extension(contentType)
}
