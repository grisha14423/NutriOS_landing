const paths = {
  arrow: <path d="M5 12h13M13 6l6 6-6 6" />,
  arrowUp: <path d="M12 19V5m0 0-5 5m5-5 5 5" />,
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m8 10 4 4 4-4" />,
  spark: <path d="M12 2.8c.6 4.2 2.9 6.5 7.2 7.2-4.3.7-6.6 3-7.2 7.2-.7-4.2-3-6.5-7.2-7.2C9 9.3 11.3 7 12 2.8Z" />,
  grid: <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />,
  calendar: <path d="M7 3v4m10-4v4M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />,
  bulb: <path d="M9 18h6m-5 3h4m3.3-11.2A5.4 5.4 0 0 0 12 4.4a5.4 5.4 0 0 0-5.3 5.4c0 2.1 1.2 3.4 2.4 4.5.6.6.9 1.2.9 2.1h4c0-.9.3-1.5.9-2.1 1.2-1.1 2.4-2.4 2.4-4.5Z" />,
  chart: <path d="M4 19V5m0 14h16M8 15v-3m4 3V8m4 7v-5" />,
  user: <path d="M20 21a8 8 0 0 0-16 0m12-13a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />,
  pan: <path d="M4 12h11a5 5 0 0 0 5-5V5m-4 10H7a4 4 0 1 1 0-8h9v8Z" />,
  swap: <path d="M7 7h11l-3-3m3 3-3 3M17 17H6l3 3m-3-3 3-3" />,
  route: <path d="M6 19c6 0 2-14 12-14m0 0-3-3m3 3-3 3M6 5h.01" />,
  note: <path d="M5 3h14v18H5zM8 8h8M8 12h8M8 16h5" />,
  clock: <circle cx="12" cy="12" r="8" />,
  clockHands: <path d="M12 7v5l3 2" />,
  plus: <path d="M12 5v14M5 12h14" />,
}

export function Icon({ name, size = 24, strokeWidth = 1.8, className = '' }) {
  if (name === 'clock') {
    return (
      <svg className={className} aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        {paths.clock}
        {paths.clockHands}
      </svg>
    )
  }

  return (
    <svg className={className} aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  )
}
