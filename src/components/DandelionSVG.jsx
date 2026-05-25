export default function DandelionSVG({ width = 34, height = 39, className = '' }) {
  return (
    <img
      src="/dandelion.png"
      alt=""
      aria-hidden="true"
      width={width}
      height={height}
      className={className}
      style={{ flexShrink: 0, mixBlendMode: 'multiply' }}
    />
  )
}
