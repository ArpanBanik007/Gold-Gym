import { cn } from "../../utils/cn";

export function Button({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:pointer-events-none",
        {
          "bg-primary text-gray-950 hover:bg-primary-dark": variant === 'primary',
          "bg-gray-800 text-white hover:bg-gray-700": variant === 'secondary',
          "border-2 border-primary text-primary hover:bg-primary/10": variant === 'outline',
          "text-gray-300 hover:text-white hover:bg-gray-800": variant === 'ghost',
          
          "px-4 py-2 text-sm": size === 'sm',
          "px-6 py-3 text-base": size === 'md',
          "px-8 py-4 text-lg": size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
