import { useFieldArray, useForm } from 'react-hook-form';

import ItemInput from './components/ItemInput';
import { Button } from './components/ui';
import { FormType } from './types';

const App = () => {
  const form = useForm<FormType>();
  const { control, register } = form;
  const { fields, append, remove } = useFieldArray({ control, name: 'test' });

  const handleSubmit = form.handleSubmit((data) => {
    const random = Math.floor(Math.random() * data.test.length);
    console.log({ data, random, item: data.test[random].value });
  });

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <ItemInput
          key={field.id}
          index={index}
          register={register}
          remove={remove}
        />
      ))}
      <Button type="button" onClick={() => append({ value: '' })}>
        Click me
      </Button>
      <Button type="submit">getValues</Button>
    </form>
  );
};

export default App;
