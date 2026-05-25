const PETALS = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]

export default function DandelionSVG({ width = 34, height = 39, className = '' }) {
  return (
    <svg
      viewBox="0 0 40 46"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{ flexShrink: 0 }}
    >
      {PETALS.map(deg => (
        <ellipse
          key={deg}
          cx="20" cy="11" rx="2.5" ry="5.5"
          fill="#F2C12E"
          transform={`rotate(${deg} 20 20)`}
        />
      ))}
      <circle cx="20" cy="20" r="5" fill="#D4A017" />
      <path d="M20 25 C19 31 17 37 15 43" stroke="#5A8A3C" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    </svg>
  )
}
