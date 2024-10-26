import { X } from 'lucide-react';
import { useRef, useState } from 'react';

import { Button, Input } from './ui';

const ItemInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasValue, setHasValue] = useState(false);

  const handleInputChange = () => {
    setHasValue(!!inputRef.current?.value);
  };

  const handleClearInput = () => {
    if (!inputRef.current) return;
    inputRef.current.value = '';
    setHasValue(false);
    inputRef.current.focus();
  };

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <div className="relative w-full">
        <Input
          type="text"
          placeholder="Enter text..."
          ref={inputRef}
          onChange={handleInputChange}
          className="pr-10"
        />
        {hasValue && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={handleClearInput}
            aria-label="Clear input"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ItemInput;
