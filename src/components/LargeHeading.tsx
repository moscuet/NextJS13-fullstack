import { FC } from 'react';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const headingVariants = cva('new-heading-color text-center lg:text-left mb-3 font-extrabold leading-tight tracking-tighter', {
    variants: {
        size: {
            default: 'text-xl md:text-2xl lg:text-3xl',
            lg: 'text-xl md:text-2xl lg:text-3xl',
            sm: 'text-lg md:text-xl lg:text-2xl',
        },
    },
    defaultVariants: {
        size: 'default',
    },
});

interface LargeHeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> { }

const LargeHeading: FC<LargeHeadingProps> = ({ children, className, size, ...props }) => {
    return (
        <h1 {...props} className={cn(headingVariants({ size, className }))}>
            {children}
        </h1>
    );
};

export default LargeHeading;
