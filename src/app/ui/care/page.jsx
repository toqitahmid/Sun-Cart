const tips = [
  {
    emoji: "🧴",
    text: "<strong>SPF 50+</strong> every morning – reapply every 2 hours if you're outdoors.",
  },
  {
    emoji: "💦",
    text: "<strong>Hydrate inside out</strong> – aim for 8–10 glasses of water + electrolytes.",
  },
  {
    emoji: "🥒",
    text: "<strong>Aloe + cucumber</strong> gel soothes sun-exposed skin and reduces redness.",
  },
  {
    emoji: "🧊",
    text: "<strong>Cool showers</strong> & ice rollers calm inflammation and boost glow.",
  },
  {
    emoji: "🍉",
    text: "<strong>Eat water-rich</strong> foods – watermelon, berries, citrus for skin vitality.",
  },
];

const Care = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 p-4">
      <div
        className="
        max-w-sm w-full mx-auto
        bg-white/80 backdrop-blur-md
        rounded-3xl p-6 sm:p-8
        shadow-[0_20px_40px_-12px_rgba(255,140,0,0.25),0_8px_24px_-6px_rgba(255,180,50,0.15)]
        border border-amber-200/30
        transition-all duration-300 hover:translate-y-[-4px]
        hover:shadow-[0_28px_48px_-16px_rgba(255,120,0,0.35),0_10px_30px_-8px_rgba(255,180,50,0.2)]
        font-sans
      "
      >
        {/* Header */}
        <div className="flex items-center gap-2 mb-5">
          <span
            className="text-3xl sm:text-4xl animate-bounce"
            aria-hidden="true"
          >
            ☀️
          </span>
          <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-400 bg-clip-text text-transparent">
            Summer Care
          </h2>
          <span className="ml-auto text-[0.6rem] font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-md">
            🌿 tips
          </span>
        </div>

        {/* Subhead */}
        <div className="flex items-center gap-2 text-sm text-amber-800/80 pb-3 mb-4 border-b border-dashed border-amber-300/40">
          <span>💧</span> Skincare & hydration must-haves
        </div>

        {/* Tips list */}
        <ul className="space-y-3">
          {tips.map((tip, index) => (
            <li
              key={index}
              className="flex items-start gap-3 p-3 rounded-2xl bg-amber-50/40 hover:bg-amber-100/60 transition-all duration-200 hover:scale-[1.01] cursor-default"
            >
              <span className="flex-shrink-0 w-9 h-9 flex items-center justify-center text-lg bg-white rounded-full shadow-sm">
                {tip.emoji}
              </span>
              <span
                className="flex-1 text-sm sm:text-[0.9rem] leading-relaxed text-amber-900/90"
                dangerouslySetInnerHTML={{ __html: tip.text }}
              />
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="mt-5 pt-4 border-t border-dashed border-amber-300/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href="#"
            className="group text-sm font-semibold text-amber-700 hover:text-amber-600 transition-colors flex items-center gap-1"
          >
            Shop the routine
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
          <span className="text-[0.7rem] font-medium text-amber-700/70 bg-amber-100/30 px-3 py-1.5 rounded-full border border-amber-300/30">
            ⭐ free shipping on orders $35+
          </span>
        </div>
      </div>
    </main>
  );
}

export default Care;