import { User } from './model/UserModel'

export function performPurchase(user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}
const result = performPurchase({name: "Erick", balance: 10}, 15)
console.log(result)