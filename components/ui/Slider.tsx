'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { useState } from 'react';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={`relative flex w-full touch-none select-none items-center ${className}`}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-[6.5px] w-full grow bg-black overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute   bg-gradient-to-r from-customgreen to-customblue  h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-3 w-3 rounded-[4px]  border-2 border-primary bg-white ring-offset-background border-customgreen transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };