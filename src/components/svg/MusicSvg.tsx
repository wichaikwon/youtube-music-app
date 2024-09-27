import React from 'react'
import type { SVGProps } from 'react'

export function MusicSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.191 14.692q.84 0 1.42-.58t.581-1.42v-5.73h2.731V5.423h-3.5v5.808q-.248-.27-.556-.404q-.307-.135-.675-.135q-.84 0-1.42.58t-.58 1.42t.58 1.42t1.42.58M6.5 17V3h14v14zm1-1h12V4h-12zm-4 4V6.616h1V19h12.385v1zm4-16v12z"></path>
    </svg>
  )
}
