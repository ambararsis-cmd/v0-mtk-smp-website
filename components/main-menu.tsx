"use client"

import { useRouter } from "next/navigation"
import { MenuCard } from "./menu-card"

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
    subtitle: "(Kelas 7/8)",
    description: "Satu & Dua Variabel. Menyelesaikan Masalah Kehidupan Nyata.",
    icon: "/icons/equation.svg",
    color: "orange" as const,
    href: "#",
  },
  {
    title: "ALJABAR & FAKTORISASI",
    subtitle: "(Kelas 8)",
    description: "Pemangkatan, Pembagian. Faktorisasi Suku Banyak.",
    icon: "/icons/factorization.svg",
    color: "green" as const,
    href: "#",
  },
  {
    title: "PERSAMAAN KUADRAT",
    subtitle: "(Kelas 9)",
    description: "Akar-akar Persamaan, Rumus ABC, Grafik Fungsi Kuadrat.",
    icon: "/icons/quadratic.svg",
    color: "red" as const,
    href: "#",
  },
]

export function MainMenu() {
  const router = useRouter()

  const handleNavigation = (href: string, tab?: string) => {
    if (href === "#") {
      alert("Materi ini akan segera tersedia!")
      return
    }
    const url = tab ? `${href}?tab=${tab}` : href
    router.push(url)
  }

  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-8 text-center text-xl font-bold text-foreground md:text-2xl">
          Menu Utama Aljabar
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item) => (
            <MenuCard
              key={item.title}
              {...item}
              onMateriClick={() => handleNavigation(item.href, "materi")}
              onVideoClick={() => handleNavigation(item.href, "video")}
              onLatihanClick={() => handleNavigation(item.href, "latihan")}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
