import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookOpen, PlayCircle, PenLine, ChevronRight } from "lucide-react"
import Link from "next/link"

const materiList = [
  {
    id: 1,
    title: "Pengenalan Aljabar",
    kelas: "Kelas 7",
    description: "Variabel, Koefisien, Konstanta, Suku. Operasi Hitung Dasar (Penjumlahan, Pengurangan).",
    href: "/materi/pengenalan-aljabar",
    color: "bg-card-blue",
    topics: [
      "Pengertian Variabel dan Konstanta",
      "Koefisien dan Suku",
      "Operasi Penjumlahan Aljabar",
      "Operasi Pengurangan Aljabar",
    ],
  },
  {
    id: 2,
    title: "Persamaan & Pertidaksamaan Linear",
    kelas: "Kelas 7",
    description: "Satu & Dua Variabel. Menyelesaikan Masalah Kehidupan Nyata.",
    href: "/materi/persamaan-linear",
    color: "bg-card-orange",
    topics: [
      "Persamaan Linear Satu Variabel",
      "Persamaan Linear Dua Variabel",
      "Pertidaksamaan Linear",
      "Penerapan dalam Kehidupan Nyata",
    ],
  },
]

export default function DaftarIsiPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary py-10 sm:py-16 text-white">
          <div className="mx-auto max-w-7xl px-3 sm:px-4 text-center lg:px-8">
            <h1 className="text-2xl sm:text-3xl font-bold md:text-4xl lg:text-5xl">Daftar Isi</h1>
            <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-lg opacity-90">
              Daftar lengkap materi pembelajaran Aljabar SMP/MTS
            </p>
          </div>
        </section>

        {/* Content List */}
        <section className="py-10 sm:py-16">
          <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
            {/* Quick Navigation */}
            <div className="mb-8 sm:mb-12 rounded-xl bg-card p-4 sm:p-6 shadow-sm">
              <h2 className="mb-4 text-base sm:text-lg font-bold text-foreground">Navigasi Cepat</h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {materiList.map((materi) => (
                  <Link
                    key={materi.id}
                    href={`#materi-${materi.id}`}
                    className={`${materi.color} rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white transition-transform active:scale-95 sm:hover:scale-105`}
                  >
                    {materi.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Materi Cards */}
            <div className="space-y-4 sm:space-y-6">
              {materiList.map((materi) => (
                <div
                  key={materi.id}
                  id={`materi-${materi.id}`}
                  className="overflow-hidden rounded-xl bg-card shadow-sm"
                >
                  {/* Header */}
                  <div className={`${materi.color} px-4 sm:px-6 py-3 sm:py-4`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="inline-block rounded-full bg-white/20 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-white">
                          {materi.kelas}
                        </span>
                        <h3 className="mt-1.5 sm:mt-2 text-base sm:text-xl font-bold text-white">
                          {materi.title}
                        </h3>
                      </div>
                      <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/20 text-base sm:text-xl font-bold text-white">
                        {materi.id}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    <p className="mb-4 text-xs sm:text-sm text-muted-foreground">
                      {materi.description}
                    </p>

                    {/* Topics */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="mb-2 sm:mb-3 text-xs sm:text-sm font-semibold text-foreground">
                        Topik Pembahasan:
                      </h4>
                      <ul className="grid gap-1.5 sm:gap-2 sm:grid-cols-2">
                        {materi.topics.map((topic, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground"
                          >
                            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 text-primary" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      <Link
                        href={`${materi.href}?tab=materi`}
                        className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-primary px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-primary-foreground transition-transform active:scale-95 sm:hover:scale-105"
                      >
                        <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        Baca Materi
                      </Link>
                      <Link
                        href={`${materi.href}?tab=video`}
                        className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-secondary px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-secondary-foreground transition-transform active:scale-95 sm:hover:scale-105"
                      >
                        <PlayCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        Tonton Video
                      </Link>
                      <Link
                        href={`${materi.href}?tab=latihan`}
                        className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-border bg-card px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-foreground transition-transform active:scale-95 sm:hover:scale-105"
                      >
                        <PenLine className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        Latihan Soal
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
