"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BookOpen, ChevronRight, Lightbulb, Puzzle, Calculator, Brain, ArrowLeft } from "lucide-react"
import Link from "next/link"

const materiList = [
  {
    title: "Pengenalan Aljabar",
    kelas: "Kelas 7",
    description: "Variabel, Koefisien, Konstanta, Suku",
    color: "bg-[#2196f3]",
    href: "/materi/pengenalan-aljabar",
    icon: Lightbulb,
    progress: 75,
  },
  {
    title: "Persamaan Linear",
    kelas: "Kelas 7",
    description: "PLSV, PLDV, Pertidaksamaan",
    color: "bg-[#ff9800]",
    href: "/materi/persamaan-linear",
    icon: Puzzle,
    progress: 50,
  },
]

export default function MateriInteraktifPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#00acff] to-[#0177c6] py-12 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Link href="/" className="mb-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Beranda
            </Link>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-white/20 p-4">
                <BookOpen className="h-10 w-10" />
              </div>
              <div>
                <h1 className="text-2xl font-bold md:text-3xl">Materi Interaktif</h1>
                <p className="mt-1 text-white/90">Pelajari konsep aljabar dengan cara yang menyenangkan</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            {/* Stats */}
            <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-lg bg-card p-4 text-center shadow-sm">
                <p className="text-2xl font-bold text-primary">4</p>
                <p className="text-sm text-muted-foreground">Total Materi</p>
              </div>
              <div className="rounded-lg bg-card p-4 text-center shadow-sm">
                <p className="text-2xl font-bold text-[#4caf50]">2</p>
                <p className="text-sm text-muted-foreground">Sedang Dipelajari</p>
              </div>
              <div className="rounded-lg bg-card p-4 text-center shadow-sm">
                <p className="text-2xl font-bold text-[#ff9800]">1</p>
                <p className="text-sm text-muted-foreground">Hampir Selesai</p>
              </div>
              <div className="rounded-lg bg-card p-4 text-center shadow-sm">
                <p className="text-2xl font-bold text-[#2196f3]">41%</p>
                <p className="text-sm text-muted-foreground">Rata-rata Progress</p>
              </div>
            </div>

            {/* Materi List */}
            <h2 className="mb-6 text-xl font-bold text-foreground">Pilih Materi</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {materiList.map((materi) => (
                <Link
                  key={materi.title}
                  href={materi.href}
                  className="group flex items-start gap-4 rounded-xl bg-card p-5 shadow-sm transition-all hover:shadow-md"
                >
                  <div className={`rounded-lg ${materi.color} p-3 text-white`}>
                    <materi.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary">
                          {materi.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">{materi.kelas}</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{materi.description}</p>
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium text-foreground">{materi.progress}%</span>
                      </div>
                      <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className={`h-full ${materi.color} transition-all`}
                          style={{ width: `${materi.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Tips Section */}
            <div className="mt-8 rounded-xl bg-gradient-to-r from-[#00acff]/10 to-[#0177c6]/10 p-6">
              <h3 className="mb-3 font-semibold text-foreground">Tips Belajar Efektif</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  Pelajari materi secara bertahap dari yang paling dasar
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  Kerjakan latihan soal setelah memahami konsep
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  Ulangi materi yang belum dikuasai
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  Tonton video tutorial untuk penjelasan visual
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
