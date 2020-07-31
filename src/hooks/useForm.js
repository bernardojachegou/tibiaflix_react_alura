/* eslint-disable linebreak-style */
import { useState } from 'react';

function useForm(defaultValues) {
  const [valores, setValues] = useState(defaultValues);

  function setValue(chave, valor) {
    setValues({
      ...valores,
      [chave]: valor,
    });
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  function clearForm() {
    setValues(defaultValues);
  }

  return {
    valores,
    handleChange,
    clearForm,
  };
}

export default useForm;
