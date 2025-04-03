import React, { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva("border  h-12 rounded-full px-6 font-medium", {
    variants: {
        variant: {
            primary: "bg-lime-400 text-neutral-950 border-lime-400",
            secondary:
                "border-white text-white bg-transparent hover:bg-white/10",
        },
        size: {
            sm: "h-10 ",
        },
    },
});

function Button(
    props: {
        variant: "primary" | "secondary";
        size?: "sm" ;
    } & ButtonHTMLAttributes<HTMLButtonElement>
) {
    const { variant, className, size , ...otherProps } = props;
    return (
        <button
            className={classes({
                variant,
                size,
                className,
            })}
            {...otherProps}
        />
    );
}

export default Button;
