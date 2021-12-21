import { useState } from "react";

export interface UseFormType {
  values: {
    content: string,
    title: string,
    subtitle: string
  },
  handleChange: () => void,
  handleSubmit: () => void,
  handleClear: () => void
}

const initialValues = {
  content: '',
  title: '',
  subtitle: ''
};

function useForm(initialState: any) {
  const [values, setValues] = useState(initialState);

  const handleChange = (event: any) => {
    const auxValues: any = { ...values };
    auxValues[event.target.name] = event.target.value;
    setValues(auxValues);
  };

  const handleSubmit = (callback: any) => (event: any) => {
    event.preventDefault();
    callback();
  };

  const handleClear = (event: any) => {
    const auxValues: any = { ...values };
    auxValues[event.target.name] = '';
    setValues(auxValues);
  }

  return { values, handleChange, handleSubmit };
}

export default useForm;