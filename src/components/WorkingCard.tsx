import { Icon } from '@iconify/react';

export default function WorkingCard() {
  return (
    <div className="border-[var(--accent-color)] border-2 rounded-sm m-4 p-4 flex flex-col justify-start items-center">
      <Icon
        icon="heroicons-outline:cog-8-tooth"
        className="text-[var(--accent-color)] w-1/2 h-1/2 animate-wiggle"
      />
      <p className='text-[var(--second-color)] text-xl'>Still working...</p>
    </div>
  );
}