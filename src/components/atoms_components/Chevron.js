

import React from 'react'

const Chevron = ({ className, height, width, fill }) => {
  return (
      <svg
        // width="24px"
        // height="24px"
        viewBox="0 0 100 100"
        className={className}
        // height={height}
        // width={width}
        fontSize='0.5rem'
        xmlns="http://www.w3.org/2000/svg"
        mirror-in-rtl="true"
        fill={fill}
      >
        <path
          d="M10.25 22.987l7.99-9c.51-.57.76-1.28.76-1.99s-.25-1.42-.74-1.98c-.01 0-.01-.01-.01-.01l-.02-.02-7.98-8.98c-1.1-1.24-3.002-1.35-4.242-.25-1.24 1.1-1.35 3-.25 4.23l6.23 7.01-6.23 7.01c-1.1 1.24-.99 3.13.25 4.24 1.24 1.1 3.13.98 4.24-.26z" />
      </svg>
  )
}

export default Chevron
