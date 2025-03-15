import { X } from 'lucide-react';
import { useCallback, useMemo } from 'react';
import {
  FieldPath,
  UseFieldArrayRemove,
  UseFormRegister,
} from 'react-hook-form';

import { FormType } from '~/types';

import { Button, Input } from './ui';

type Props = {
  index: number;
  register: UseFormRegister<FormType>;
  remove: UseFieldArrayRemove;
};

const ItemInput = ({ index, register, remove }: Props) => {
  const field = useMemo(
    (): FieldPath<FormType> => `test.${index}.value` as const,
    [index],
  );
  const handleRemove = useCallback(() => remove(index), [remove, index]);
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder="Enter text..."
        className="pr-10"
        {...register(field)}
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className=" h-full px-3 py-2 hover:bg-transparent"
        aria-label="Clear input"
        onClick={handleRemove}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ItemInput;
