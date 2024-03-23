import Link from 'next/link';
import { PropsWithChildren } from 'react';

type TLink = {
  href: string;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  className,
  ...rest
}: PropsWithChildren & TLink) {
  return (
    <Link
      {...rest}
      href={href}
      className={`${className} inline-block rounded-md bg-primary px-3 py-2 text-white hover:shadow-sm`}
    >
      {children}
    </Link>
  );
}
export function TextLink({
  href,
  children,
  className,
  ...rest
}: PropsWithChildren & TLink) {
  return (
    <Link
      {...rest}
      href={href}
      className={`${className} text-primary hover:underline`}
    >
      {children}
    </Link>
  );
}
