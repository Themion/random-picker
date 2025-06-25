import { X } from 'lucide-react';
import { ComponentProps } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { cn } from '~/lib/utils';
import { FormType } from '~/types';
import { Button, Input } from './ui';

type Props = Omit<ComponentProps<'input'>, 'type' | 'placeholder' | 'onChange'> & {
  index: number,
};

const ItemInput = ({ index, className, ...props }: Props) => {
  const { control, register } = useFormContext<FormType>();
  const { remove } = useFieldArray({ control: control, name: 'items' });

  const handleCloseClick = () => {
    remove(index);
  }

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder="Enter text..."
        className={cn("pr-10", className)}
        {...props}
        {...register(`items.${index}.text`)}
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={handleCloseClick}
        className=" h-full px-3 py-2 hover:bg-transparent"
        aria-label="Clear input"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ItemInput;
