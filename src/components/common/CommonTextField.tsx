import React, { useState } from 'react';
import IconButton from './IconButton';
import { XIcon } from '../icon/Icons';
import ErrorMessage from './ErrorMessage';
import { cn } from '@/lib/utils';

interface CommonTextField {
  errorMessage: string;
  onIconClick: React.MouseEventHandler<HTMLButtonElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  Value: string;
  IsError: boolean;
}

export default function CommonTextField({
  errorMessage,
  onIconClick,
  placeholder,
  Value,
  IsError,
  onChange,
}: CommonTextField) {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused ? 'border-emerald-400' : !Value ? 'border-gray-400' : 'border-black';
  return (
    <>
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn('border-b border-primary text-primary ', borderColor)}>
        <input
          className="outline-none"
          type="text"
          placeholder={placeholder}
          value={Value}
          onChange={onChange}
        />
        {Value && (
          <IconButton onClick={onIconClick}>
            <XIcon />
          </IconButton>
        )}
      </div>
      {IsError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
}
