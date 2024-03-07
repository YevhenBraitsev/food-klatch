import Link from 'next/link';

type TButtonLink = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  className,
  ...rest
}: TButtonLink) {
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
