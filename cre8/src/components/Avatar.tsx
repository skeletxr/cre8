import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

function Avatar(props: HTMLAttributes<HTMLElement>) {
    const { className,children , ...otherProps } = props
  return (
    <div className={twMerge("size-20 rounded-full overflow-hidden border-4 border-blue-500 p-1 bg-neutral-500" , className)} {...otherProps}>{children}</div>
  )
}

export default Avatar