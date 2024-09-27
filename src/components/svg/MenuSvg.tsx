import React from 'react'

const MenuSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 32 32"
  fill="none"
  stroke="currentColor"
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth={2}
  {...props}
>
  <path d="M5 8h22M5 16h22M5 24h22" />
</svg>
)
export default MenuSvg
