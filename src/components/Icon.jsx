const paths = {
  shield: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3zm-1.2 11.2l4.6-4.6-1.4-1.4-3.2 3.2-1.4-1.4-1.4 1.4 2.8 2.8z"
    />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 7v5l3 2" />
    </>
  ),
  wallet: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 7a2 2 0 012-2h12l3 3v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm14 4h2m-3 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
    />
  ),
  car: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 16l1.5-5.5a2 2 0 012-1.5h7a2 2 0 012 1.5L19 16M5 16h14M5 16v2a1 1 0 001 1h1a1 1 0 001-1v-2m9 0v2a1 1 0 001 1h1a1 1 0 001-1v-2M7 13h.01M17 13h.01"
    />
  ),
  border: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 12h18M9 6l-3 6 3 6m6-12l3 6-3 6"
    />
  ),
  support: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-4v4l3 2M3 12h2m14 0h2"
    />
  ),
  phone: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h2l2 5-2 1a11 11 0 005 5l1-2 5 2v2a2 2 0 01-2 2A16 16 0 013 5z"
    />
  ),
  whatsapp: (
    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.6-1.4-3.7-3.2-.3-.5.3-.4.8-1.4.1-.2 0-.3 0-.5s-.6-1.5-.9-2c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5c1.5.9 3.3 1.4 5.2 1.4 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.7 0-3.4-.5-4.8-1.4l-.3-.2-2.9.9.9-2.8-.2-.3a8.2 8.2 0 117.3 3.8z" />
  ),
  telegram: (
    <path d="M11.9 15.2l-.4 4c.5 0 .7-.2 1-.5l2.5-2.3 5.1 3.7c.9.5 1.6.2 1.8-.9L24 4.4c.3-1.3-.5-1.8-1.4-1.5L2.4 10.8c-1.3.5-1.3 1.2-.2 1.5l5 1.6 11.6-7.3c.5-.3 1-.1.6.2L9.9 15z" />
  ),
  check: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 13l4 4L19 7"
    />
  ),
  arrow: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 12h14m-6-6l6 6-6 6"
    />
  ),
  chevron: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 9l6 6 6-6"
    />
  ),
  star: (
    <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8L2 9.3l6.9-1L12 2z" />
  ),
  pin: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21s7-7.3 7-12a7 7 0 10-14 0c0 4.7 7 12 7 12zm0-9a3 3 0 100-6 3 3 0 000 6z"
    />
  ),
  mail: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 7l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
    />
  ),
}

export default function Icon({ name, className = 'h-5 w-5', filled = false }) {
  const isFilled = filled || name === 'whatsapp' || name === 'telegram' || name === 'star'
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={isFilled ? 'currentColor' : 'none'}
      stroke={isFilled ? 'none' : 'currentColor'}
      strokeWidth={1.8}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
