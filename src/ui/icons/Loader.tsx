import * as React from "react"
import {SVGProps} from "react"

export const SvgLoader = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={512}
    height={512}
    {...props}
  >
    <path d="M12 2a10.032 10.032 0 0 1 7.122 3H16a1 1 0 0 0-1 1 1 1 0 0 0 1 1h4.143A1.858 1.858 0 0 0 22 5.143V1a1 1 0 0 0-1-1 1 1 0 0 0-1 1v2.078A11.981 11.981 0 0 0 .05 10.9a1.007 1.007 0 0 0 1 1.1.982.982 0 0 0 .989-.878A10.014 10.014 0 0 1 12 2ZM22.951 12a.982.982 0 0 0-.989.878A9.986 9.986 0 0 1 4.878 19H8a1 1 0 0 0 1-1 1 1 0 0 0-1-1H3.857A1.856 1.856 0 0 0 2 18.857V23a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-2.078A11.981 11.981 0 0 0 23.95 13.1a1.007 1.007 0 0 0-1-1.1Z" />
  </svg>
)
