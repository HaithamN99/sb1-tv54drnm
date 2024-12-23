import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={cn(
      "bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300",
      className
    )}>
      {children}
    </div>
  );
};

export default Card;