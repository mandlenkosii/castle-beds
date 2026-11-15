import { Link } from 'react-router-dom'

/**
 * Castle Bed bed-and-wave mark, redrawn as a vector from the brand logo so it
 * stays crisp at any size. Colours come from `currentColor` via the wrapper.
 */
export function LogoMark({ className = '', waveClassName = '' }) {
  return (
    <svg viewBox="0 0 100 40" className={className} aria-hidden="true" focusable="false">
      {/* Bedposts with round finials */}
      <circle cx="14" cy="3.6" r="3.3" fill="currentColor" />
      <circle cx="82" cy="3.6" r="3.3" fill="currentColor" />
      <rect x="11" y="5" width="6" height="23" rx="1.4" fill="currentColor" />
      <rect x="79" y="5" width="6" height="20" rx="1.4" fill="currentColor" />
      {/* Arched headboard with two pillows cut out */}
      <path
        fillRule="evenodd"
        fill="currentColor"
        d="M17 10.5 Q48 3.5 79 10.5 V24.5 Q48 25.5 17 27 Z
           M21.5 15.5 Q21.5 13.8 23.5 13.6 L44 13 Q46 13 46 15 V24.6 L21.5 25.6 Z
           M50 15 Q50 13 52 13 L72.5 13.6 Q74.5 13.8 74.5 15.5 V24.4 L50 24.6 Z"
      />
      {/* Sweeping wave beneath the bed */}
      <path
        className={waveClassName}
        fill="currentColor"
        d="M1 28.6 C22 26.4 38 36.5 58 33.6 C73 31.5 84 24.6 99 23.6
           C86 27.6 75 34.8 58 37.2 C38 40 22 30.6 1 28.6 Z"
      />
    </svg>
  )
}

/**
 * Brand lockup: mark + wordmark + tagline.
 * Default (header/menus): compact on phones so it fits between the header icons.
 * `light` (footer, dark backgrounds): light colours, always full size.
 */
export default function Logo({ light = false, className = '' }) {
  const mark = light ? 'h-10 text-ivory/70' : 'h-5 sm:h-10 text-[#a9adb3]'
  const wave = light ? 'text-sand' : 'text-brand/70'
  const word = light ? 'text-[1.55rem] text-ivory' : 'text-[1.05rem] sm:text-[1.55rem] text-brand'
  const tagline = light ? 'block text-sand' : 'hidden sm:block text-taupe'

  return (
    <Link
      to="/"
      aria-label="Castle Bed — home"
      className={`inline-flex shrink-0 items-center ${light ? 'gap-3' : 'gap-2 sm:gap-3'} ${className}`}
    >
      <LogoMark className={`w-auto ${mark}`} waveClassName={wave} />
      <span className="flex flex-col leading-none">
        <span className={`font-display font-extrabold tracking-[-0.01em] ${word}`}>Castle Bed</span>
        <span className={`mt-1 text-[9.5px] font-medium uppercase tracking-[0.3em] ${tagline}`}>
          Sleep like royalty
        </span>
      </span>
    </Link>
  )
}
