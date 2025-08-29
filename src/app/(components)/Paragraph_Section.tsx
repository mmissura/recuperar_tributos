import { cn } from '@/utils/cn';
import { PropsWithChildren } from 'react';

interface ParagraphSectionProps extends PropsWithChildren {
  className?: string;
}

export function ParagraphSection({
  children,
  className,
}: ParagraphSectionProps) {
  return <p className={cn('mb-4', className)}>{children}</p>;
}
