import { Icon as Iconify } from '@iconify/react';

type IconProps = {
  name: string;
  className?: string;
  title?: string;
};

export default function Icon({ name, className = "w-6 h-6", title }: IconProps) {
  return (
    <Iconify icon={name} className={className} title={title} />
  );
}
