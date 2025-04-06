import { InputHTMLAttributes, ReactNode } from 'react';

export type InputSize = 'small' | 'medium' | 'large';

// Estendere InputHTMLAttributes ma ridefinire la property 'prefix' per accettare ReactNode
type BaseInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'>;

export interface InputProps extends BaseInputProps {
  /** Input label */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Icon or element to display before the input */
  prefix?: ReactNode;
  /** Icon or element to display after the input */
  suffix?: ReactNode;
  /** Input size variant */
  size?: InputSize;
  /** Whether the input should take full width of parent */
  fullWidth?: boolean;
}
