import { useState } from 'react'
import DandelionSVG from './DandelionSVG'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b-[3px] border-yellow shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
      <div className="max-w-[1000px] mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <DandelionSVG />
          <span className="text-[1.1rem] font-bold text-green-dark tracking-[-0.2px]">
            My Nutrition Journey
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-7">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-[0.95rem] text-[#666] font-semibold font-sans hover:text-green transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden text-2xl text-[#2C2C2C] p-1 leading-none"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-200 ${
          open ? 'max-h-48 py-4' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-4 px-6">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-[#666] font-semibold font-sans hover:text-green transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
