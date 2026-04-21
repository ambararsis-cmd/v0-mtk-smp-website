import Link from "next/link"
import { BookOpen, PlayCircle, Edit, TrendingUp } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    label: "Materi Interaktif",
    href: "/fitur/materi-interaktif",
    color: "bg-card-blue",
  },
  {
    icon: PlayCircle,
    label: "Video Tutorial",
    href: "/fitur/video-tutorial",
    color: "bg-card-orange",
  },
  {
    icon: Edit,
    label: "Latihan Soal & Kuis",
    href: "/fitur/latihan-soal",
    color: "bg-card-green",
  },
  {
    icon: TrendingUp,
    label: "Statistik Kemajuan",
    href: "/fitur/statistik",
    color: "bg-card-red",
  },
]

export function Features() {
  return (
    <section className="pb-8 sm:pb-12 lg:pb-16">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
        <div className="mb-5 sm:mb-8 text-center">
          <h2 className="text-lg sm:text-xl font-bold text-foreground md:text-2xl">
            Fitur Pembelajaran
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Berbagai fitur untuk mendukung proses belajarmu
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6">
          {features.map((feature) => (
            <Link
              key={feature.label}
              href={feature.href}
              className="group flex flex-col items-center rounded-lg bg-card p-3 sm:p-4 shadow-sm md:p-6 active:scale-[0.98] transition-all hover:shadow-md"
            >
              <div className={`mb-2 sm:mb-3 flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full ${feature.color}/10 group-hover:${feature.color}/20 transition-colors`}>
                <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
              </div>
              <p className="text-center text-[10px] sm:text-xs font-medium text-foreground md:text-sm group-hover:text-primary transition-colors">
                {feature.label}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-6 sm:mt-8 text-center">
          <Link
            href="/fitur"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-primary hover:underline"
          >
            Lihat Semua Fitur
            <span className="text-lg">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
