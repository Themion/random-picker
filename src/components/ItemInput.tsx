import { X } from 'lucide-react';
import { ComponentProps } from 'react';

import { Button, Input } from './ui';

type Props = Omit<ComponentProps<'input'>, 'type' | 'placeholder'>;

const ItemInput = ({ ...props }: Props) => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder="Enter text..."
        className="pr-10"
        {...props}
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className=" h-full px-3 py-2 hover:bg-transparent"
        aria-label="Clear input"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ItemInput;
