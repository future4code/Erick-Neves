import { User } from "../src/model/UserModel"
import {performPurchase} from "../src/index"

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Erick",
		balance: 50
	}

	const result = performPurchase(user, 40)

	expect(result).toEqual({
		name: "Erick",
		balance: 10
	})
})

test("Testing balance is equal than value", () => {
	const user: User = {
		name: "Lucas",
		balance: 30
	}

	const result = performPurchase(user, 30)

	expect(result).toEqual({
		name: "Lucas",
		balance: 0
	})
})

test("Testing balance is less than value", () => {
	const user: User = {
		name: "Mateus",
		balance: 5
	}

	const result = performPurchase(user, 35)

	expect(result).toBeUndefined()
})

test("Testing balance is less than value", () => {
	const user: User = {
		name: "Mateus",
		balance: 5
	}

	const result = performPurchase(user, 35)

	expect(result).toBeUndefined()
})

