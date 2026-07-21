import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-tight transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-indigo_ink-700 text-ivory shadow-soft hover:-translate-y-0.5 hover:bg-indigo_ink-800 hover:shadow-lift',
        accent:
          'bg-sindoor-600 text-white shadow-soft hover:-translate-y-0.5 hover:bg-sindoor-700 hover:shadow-lift',
        outline:
          'border border-indigo_ink-700/20 bg-white/60 text-indigo_ink-800 backdrop-blur hover:border-indigo_ink-700/40 hover:bg-white',
        ghost: 'text-indigo_ink-800 hover:bg-indigo_ink-50',
        light:
          'bg-white/15 text-ivory backdrop-blur-md ring-1 ring-inset ring-white/25 hover:bg-white/25',
        link: 'text-indigo_ink-700 underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-9 px-4 text-[0.8125rem]',
        default: 'h-11 px-6',
        lg: 'h-[3.25rem] px-8 text-base',
        icon: 'size-11',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
