# **Exercicios da aula 51 - Criptografia e User Roles**

### **Exercicio 1:**
A primeira implementação que vamos fazer refere-se à função que vai cuidar do hash da nossa senha. Vamos utilizar um bem famoso e muito recomendado para senhas de usuários: *bcryptjs*. A principal vantagem dele é que é gerada uma string aleatória e atrelada à saída da criptografia. Isso **impede** que se faça o ataque chamado de ***rainbow table*,** que consiste em montar uma tabela com infinitas possibilidades da saída do *hash*. 

Abaixo, há o exemplo de uso da função de *hash*

```tsx
import * as bcrypt from "bcryptjs";

const rounds = Number(process.env.BCRYPT_COST);
const salt = await bcrypt.genSalt(rounds);
const result = await bcrypt.hash(s, salt);
console.log("encrypted message: ", result);
```

*a. O que são os `round` e `salt`? Que valores são recomendados para o `round`? Que valor você usou? Por quê?*

R: rounds ou cost, define o custo computacional para operar o texto puro, quanto maior mais seguro, definido por 2 dígitos no caso em ``BCRYPT_COST`` = 12 (mais usual, e seguro).

salt é gerado por uma outra função a genSalt, e quanto maior o round/cost mais seguro será o resultado da operação feita da encriptação.

*b. Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por **criptografar** uma string usando o bcryptjs.*

```typescript
import * as bcrypt from "bcryptjs";
export const hashPass = async (s:string): Promise<string> => {
    const rounds: number = Number(process.env.BCRYPT_COST);
    if(isNaN(Number(process.env.BCRYPT_COST))){
        throw new Error("Cost must be a number");
    }
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(s, salt);
    return result;
}
```

*c. Agora, crie a função que verifique se uma string é correspondente a um hash, use a função `compare` do bcryptjs*

```typescript
import * as bcrypt from "bcryptjs";
export const compare = (s: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(s, hash);
}
```