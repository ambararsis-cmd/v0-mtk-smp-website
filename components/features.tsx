import { BookOpen, PlayCircle, Edit, TrendingUp } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    label: "Materi Interaktif",
  },
  {
    icon: PlayCircle,
    label: "Video Tutorial",
  },
  {
    icon: Edit,
    label: "Latihan Soal & Kuis",
  },
  {
    icon: TrendingUp,
    label: "Statistik Kemajuan",
  },
]

export function Features() {
  return (
    <section className="pb-8 sm:pb-12 lg:pb-16">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
        <h2 className="mb-5 sm:mb-8 text-center text-lg sm:text-xl font-bold text-foreground md:text-2xl">
          Fitur Pembelajaran
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex flex-col items-center rounded-lg bg-card p-3 sm:p-4 shadow-sm md:p-6 active:scale-[0.98] transition-transform"
            >
              <div className="mb-2 sm:mb-3 text-primary">
                <feature.icon className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10" />
              </div>
              <p className="text-center text-[10px] sm:text-xs font-medium text-foreground md:text-sm">
                {feature.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
