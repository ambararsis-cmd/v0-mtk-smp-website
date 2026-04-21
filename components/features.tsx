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
    <section className="pb-12 lg:pb-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-8 text-center text-xl font-bold text-foreground md:text-2xl">
          Fitur Pembelajaran
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex flex-col items-center rounded-lg bg-card p-4 shadow-sm md:p-6"
            >
              <div className="mb-3 text-primary">
                <feature.icon className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <p className="text-center text-xs font-medium text-foreground md:text-sm">
                {feature.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
