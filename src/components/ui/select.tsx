import * as React from 'react';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';

const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => (
    <div className="relative">
      <select
        ref={ref}
        className={cn(
          'flex h-12 w-full appearance-none rounded-xl border border-input bg-white/80 px-4 py-2 pr-10 text-sm shadow-sm transition-colors focus-visible:border-indigo_ink-500 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden
        className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted"
      />
    </div>
  ),
);
Select.displayName = 'Select';

export { Select };
