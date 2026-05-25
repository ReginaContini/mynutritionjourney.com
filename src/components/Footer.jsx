export default function Footer() {
  return (
    <footer className="bg-green-dark border-t border-white/10 text-white/60 text-center py-6 text-[0.88rem]">
      <div className="max-w-[1000px] mx-auto px-6">
        <p>
          <span className="inline-flex items-center justify-center bg-white rounded-full w-6 h-6 mr-1 align-middle">
            <img src="/dandelion.png" alt="" aria-hidden="true" width={16} height={20} style={{ mixBlendMode: 'multiply' }} />
          </span>{' '}
          Contini Nutritional Wellness &mdash; Regina Contini, RD
        </p>
        <p className="mt-1 font-sans">
          Registered Dietitian &amp; Private Chef &nbsp;|&nbsp; mynutritionjourney.com
        </p>
      </div>
    </footer>
  )
}
