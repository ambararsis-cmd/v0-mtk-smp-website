import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookOpen, PlayCircle, Edit, TrendingUp, ChevronRight } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: BookOpen,
    title: "Materi Interaktif",
    description: "Materi pembelajaran yang disajikan secara interaktif dengan visualisasi, animasi, dan contoh-contoh praktis untuk memudahkan pemahaman konsep matematika.",
    color: "bg-card-blue",
    href: "/fitur/materi-interaktif",
    highlights: ["Penjelasan step-by-step", "Visualisasi konsep", "Contoh soal lengkap", "Rangkuman materi"]
  },
  {
    icon: PlayCircle,
    title: "Video Tutorial",
    description: "Video pembelajaran berkualitas yang menjelaskan konsep matematika dengan cara yang mudah dipahami, dilengkapi dengan animasi dan ilustrasi.",
    color: "bg-card-orange",
    href: "/fitur/video-tutorial",
    highlights: ["Video HD berkualitas", "Penjelasan detail", "Durasi optimal", "Dapat diulang"]
  },
  {
    icon: Edit,
    title: "Latihan Soal & Kuis",
    description: "Berbagai latihan soal dan kuis interaktif untuk menguji pemahaman dan melatih kemampuan dalam menyelesaikan permasalahan matematika.",
    color: "bg-card-green",
    href: "/fitur/latihan-soal",
    highlights: ["Soal bervariasi", "Pembahasan lengkap", "Sistem penilaian", "Feedback instan"]
  },
  {
    icon: TrendingUp,
    title: "Statistik Kemajuan",
    description: "Pantau perkembangan belajar dengan statistik yang menampilkan progress pembelajaran, nilai, dan area yang perlu ditingkatkan.",
    color: "bg-card-red",
    href: "/fitur/statistik",
    highlights: ["Grafik progress", "Riwayat nilai", "Analisis kelemahan", "Target belajar"]
  },
]

export default function FiturPembelajaranPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary py-10 sm:py-16 text-white">
          <div className="mx-auto max-w-7xl px-3 sm:px-4 text-center lg:px-8">
            <h1 className="text-2xl sm:text-3xl font-bold md:text-4xl lg:text-5xl">Fitur Pembelajaran</h1>
            <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-lg opacity-90">
              Berbagai fitur lengkap untuk mendukung proses belajar matematika yang efektif dan menyenangkan
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-10 sm:py-16">
          <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {features.map((feature) => (
                <Link
                  key={feature.title}
                  href={feature.href}
                  className="group rounded-xl bg-card p-5 sm:p-6 shadow-sm transition-all hover:shadow-md active:scale-[0.99]"
                >
                  <div className="flex items-start gap-4">
                    <div className={`${feature.color} flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-xl text-white`}>
                      <feature.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base sm:text-lg font-bold text-foreground">{feature.title}</h3>
                        <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                        {feature.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="rounded-full bg-muted px-2 sm:px-3 py-1 text-[10px] sm:text-xs text-muted-foreground"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted py-10 sm:py-16">
          <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground md:text-3xl">
              Siap Mulai Belajar?
            </h2>
            <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">
              Pilih materi yang ingin kamu pelajari dan mulai perjalanan belajar matematikamu sekarang!
            </p>
            <Link
              href="/daftar-isi"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 active:scale-95"
            >
              Lihat Daftar Materi
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
