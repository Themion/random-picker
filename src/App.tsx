import { useFieldArray, useForm } from 'react-hook-form';

import { Button } from '~/components/ui';

import ItemInput from './components/ItemInput';

type FormType = {
  items: { text: string }[];
};

const App = () => {
  const { control, register, handleSubmit } = useForm<FormType>();
  const { fields, append } = useFieldArray({ control, name: 'items' });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <h1 className="text-3xl text-center font-bold underline">Hello World</h1>
      <form onSubmit={onSubmit}>
        <ul>
          {fields.map((field, index) => (
            <ItemInput key={field.id} {...register(`items.${index}.text`)} />
          ))}
        </ul>
        <Button onClick={() => append({ text: '' })}>Click me</Button>
        <Button type="submit">Click me</Button>
      </form>
    </>
  );
};

export default App;
