import { cn } from '@/lib/utils';
import { Reveal } from '@/components/shared/reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  variant?: 'dark' | 'light';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  variant = 'dark',
  className,
}: SectionHeadingProps) {
  const isLight = variant === 'light';

  return (
    <Reveal className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <p
          className={cn(
            'text-eyebrow font-semibold uppercase',
            isLight ? 'text-sindoor-300' : 'text-sindoor-600',
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          'mt-4 text-balance text-display-md',
          isLight ? 'text-ivory' : 'text-indigo_ink-900',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-5 text-pretty text-[1.0625rem] leading-relaxed',
            isLight ? 'text-ivory/70' : 'text-muted',
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
