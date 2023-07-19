
import { cn } from '@/libs/utils';
import { MouseEventHandler } from 'react';

interface IconButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ onClick, className, icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition', className)}
    >
      {Icon}
    </button>
  )
}

export default IconButton
