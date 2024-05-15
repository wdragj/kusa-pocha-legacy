'use client';

import React from 'react';
import { Button } from '@nextui-org/react';

interface NextUIButtonProps {
  divClassName: string;
  className: string;
  text: string;
  size: 'sm' | 'md' | 'lg';
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger';
  radius?: 'none' | 'full' | 'lg' | 'md' | 'sm';
  type?: 'button' | 'submit' | 'reset';
}

export function NextUIButton({
  divClassName,
  className,
  text,
  size = 'md',
  color = 'default',
  radius = 'none',
  type = 'button',
  ...props
}: NextUIButtonProps) {
  return (
    <div className={divClassName}>
      <Button
        className={className}
        color={color}
        size={size}
        radius={radius}
        type={type}
      >
        {text}
      </Button>
    </div>
  );
}
