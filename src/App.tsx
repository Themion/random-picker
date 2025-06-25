import { FormProvider, useFieldArray, useForm } from 'react-hook-form';

import { Button } from '~/components/ui';
import { FormType } from '~/types';

import ItemInput from './components/ItemInput';

const App = () => {
  const form = useForm<FormType>();
  const { fields, append } = useFieldArray({ control: form.control, name: 'items' });

  const handleSubmit = form.handleSubmit(({items}) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    console.log(items[randomIndex]!.text);
  });

  return (
    <FormProvider {...form}>
      <h1 className="text-3xl text-center font-bold underline">Hello World</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {fields.map((field, index) => (
            <ItemInput key={field.id} index={index} />
          ))}
        </ul>
        <Button type="button" onClick={() => append({ text: '' })}>Append</Button>
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export default App;
