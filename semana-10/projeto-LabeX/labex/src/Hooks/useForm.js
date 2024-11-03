import { useState } from "react";

const useForm = (initialState) => {                 //o estado inicial(initialState) que varia de acordo com o componente que vai usar, vão ser atribuidos os estados diretamente no componente de uso
  const [form, setForm] = useState(initialState);   

  const onChangeInput = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });

    // o mesmo que:
    // const newValue = event.target.value
    // const fieldName = event.target.name
    //          (...pega todas as propriedades anteriores) e seta a proxima propriedade de [nome]: e valor
    // setForm({...form, [fieldName]: newValue})
  };
  const clearFields = () => {
    setForm(initialState);
  };

  return [form, onChangeInput, clearFields];
};

export default useForm;