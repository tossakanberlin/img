export type FormMessage = { status: 'error' | 'ok'; message: string }

export type BuyForm = {
	optionId: string | null
	serverId: string | null
	promotionCode: string | null
	ref1: string | null
	method: 'native' | 'ezpoint'
}
