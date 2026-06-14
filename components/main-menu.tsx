"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { MenuCard } from "./menu-card"

const colorClasses = {
  blue: "bg-card-blue",
  orange: "bg-card-orange",
  green: "bg-card-green",
  red: "bg-card-red",
}

const menuItems = [
  {
    title: "PENGENALAN ALJABAR",
    subtitle: "(Kelas 7)",
    description: "Variabel, Koefisien, Konstanta, Suku. Operasi Hitung Dasar (Penjumlahan, Pengurangan).",
    icon: "/icons/algebra-intro.svg",
    color: "blue" as const,
    href: "/materi/pengenalan-aljabar",
  },
  {
    title: "PERSAMAAN & PERTIDAKSAMAAN LINEAR",
    subtitle: "(Kelas 7)",
    description: "Satu & Dua Variabel. Menyelesaikan Masalah Kehidupan Nyata.",
    icon: "/icons/equation.svg",
    color: "orange" as const,
    href: "/materi/persamaan-linear",
  },
  {
    title: "RODA BERPUTAR",
    subtitle: "(Kelas 7)",
    description: "Game interaktif aljabar dengan roda berputar dan 4 pilihan jawaban.",
    icon: "/icons/game.svg",
    color: "green" as const,
    href: "/game/roda-berputar",
    isGame: true,
  },
]

export function MainMenu() {
  const router = useRouter()

  const handleNavigation = (href: string, tab?: string, isGame?: boolean) => {
    if (href === "#") {
      alert("Materi ini akan segera tersedia!")
      return
    }
    const url = isGame ? href : (tab ? `${href}?tab=${tab}` : href)
    router.push(url)
  }

  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
        <h2 className="mb-5 sm:mb-8 text-center text-lg sm:text-xl font-bold text-foreground md:text-2xl">
          Menu Utama Aljabar
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {menuItems.map((item) => (
            item.isGame ? (
              <button
                key={item.title}
                onClick={() => handleNavigation(item.href, undefined, true)}
                className={`${colorClasses[item.color]} rounded-xl p-4 sm:p-6 text-center text-white shadow-lg transition-transform active:scale-[0.98] sm:hover:scale-105 flex flex-col`}
              >
                <div className="mb-3 sm:mb-4 flex justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={70}
                    height={70}
                    className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
                  />
                </div>
                <h3 className="mb-1.5 sm:mb-2 text-xs sm:text-sm font-semibold leading-tight md:text-base">
                  {item.title}
                  <br />
                  <span className="font-normal opacity-90">{item.subtitle}</span>
                </h3>
                <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs leading-relaxed opacity-90 md:text-sm line-clamp-3">
                  {item.description}
                </p>
                <div className="mt-auto">
                  <span className="inline-block rounded-full bg-white text-foreground px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold">
                    Mainkan
                  </span>
                </div>
              </button>
            ) : (
              <MenuCard
                key={item.title}
                {...item}
                onMateriClick={() => handleNavigation(item.href, "materi")}
                onVideoClick={() => handleNavigation(item.href, "video")}
                onLatihanClick={() => handleNavigation(item.href, "latihan")}
              />
            )
          ))}
        </div>
      </div>
    </section>
  )
}
