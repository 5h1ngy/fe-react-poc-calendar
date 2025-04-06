import { HTMLAttributes, ReactNode } from 'react';

export type CardShadow = 'none' | 'sm' | 'md' | 'lg';

// Estendere HTMLAttributes ma ridefinire la property 'title' per accettare ReactNode
type BaseCardProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'>;

export interface CardProps extends BaseCardProps {
  /** Card title */
  title?: ReactNode;
  /** Extra content in the top-right corner */
  extra?: ReactNode;
  /** Footer content */
  footer?: ReactNode;
  /** Whether the card should have a hover effect */
  hoverable?: boolean;
  /** Whether to show a border */
  bordered?: boolean;
  /** Shadow size */
  shadow?: CardShadow;
}
