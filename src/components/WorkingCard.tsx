import { Icon } from '@iconify/react';

export default function WorkingCard() {
  return (
    <div className="border-[var(--accent-color)] border-2 rounded-md m-4 p-4 flex flex-col justify-start items-center">
      <Icon
        icon="heroicons-outline:cog-8-tooth"
        className="text-[var(--accent-color)] w-16 h-16 animate-wiggle"
      />
      <p className='text-[var(--second-color)] text-xl'>Still working...</p>
    </div>
  );
}