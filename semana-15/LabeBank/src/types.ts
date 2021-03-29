export type Transaction = {
    value: number,
    date: Date,
    description: string
}

export type Account = {
    cpf: string,
    name: string,
    dateofBirth: Date,
    balance: number,
    statement: Array<Transaction>
}

