import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] transition-colors',
  {
    variants: {
      variant: {
        default: 'border-indigo_ink-200 bg-indigo_ink-50 text-indigo_ink-700',
        accent: 'border-sindoor-200 bg-sindoor-50 text-sindoor-700',
        outline: 'border-sand bg-transparent text-muted',
        light: 'border-white/25 bg-white/10 text-ivory backdrop-blur',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
