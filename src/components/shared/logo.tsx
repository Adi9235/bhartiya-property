import { cn } from '@/lib/utils';

interface LogoMarkProps {
  className?: string;
  title?: string;
}

/**
 * Vector rebuild of the existing Bhartiya Properties mark: two house forms
 * sheltered under a single sweeping roof. Identity kept intact, edges cleaned
 * up and converted to scalable SVG.
 */
export function LogoMark({ className, title = 'Bhartiya Property' }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 96 72"
      role="img"
      aria-label={title}
      className={cn('h-10 w-auto', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      {/* sweeping shelter roof */}
      <path
        d="M4 40C14 16 34 4 52 4c18 0 32 9 40 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* left house */}
      <path
        d="M10 66V40l17-13 17 13v26"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <rect x="21" y="46" width="12" height="20" rx="2" className="fill-indigo_ink-700" />
      {/* right house */}
      <path
        d="M52 66V44l16-12 16 12v22"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <rect x="62" y="48" width="12" height="18" rx="2" className="fill-indigo_ink-700" />
      {/* ground line */}
      <path d="M2 68h92" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  showTagline?: boolean;
}

export function Logo({ className, variant = 'dark', showTagline = true }: LogoProps) {
  const isLight = variant === 'light';
  return (
    <span className={cn('flex items-center gap-3', className)}>
      <LogoMark className={cn('h-9 w-auto', isLight ? 'text-sindoor-400' : 'text-sindoor-600')} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-deva text-[1.05rem] font-bold leading-none tracking-tight',
            isLight ? 'text-ivory' : 'text-indigo_ink-800',
          )}
        >
          भारतीय प्रॉपर्टीज
        </span>
        {showTagline ? (
          <span
            className={cn(
              'mt-1 text-[0.5625rem] font-semibold uppercase tracking-[0.22em]',
              isLight ? 'text-ivory/60' : 'text-muted',
            )}
          >
            A to Z Property Solutions
          </span>
        ) : null}
      </span>
    </span>
  );
}
