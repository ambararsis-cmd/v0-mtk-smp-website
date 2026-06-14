"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  HelpCircle, 
  BookOpen, 
  PlayCircle, 
  PenLine, 
  Mail, 
  ChevronDown,
  Smartphone,
  Monitor,
  Search,
  Home
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const faqData = [
  {
    question: "Bagaimana cara mengakses materi pembelajaran?",
    answer: "Kamu bisa mengakses materi pembelajaran dengan memilih topik yang ingin dipelajari di halaman Beranda atau melalui menu Daftar Isi. Setiap topik memiliki 3 bagian: Materi, Video, dan Latihan Soal.",
  },
  {
    question: "Apakah platform ini gratis?",
    answer: "Ya, platform MTK SMP/MTS ini sepenuhnya gratis! Semua materi, video, dan latihan soal dapat diakses tanpa biaya apapun.",
  },
  {
    question: "Bagaimana cara menonton video pembelajaran?",
    answer: "Pilih topik yang ingin dipelajari, kemudian klik tombol 'Video' pada kartu materi. Video akan ditampilkan di halaman materi dengan tab Video aktif.",
  },
  {
    question: "Bagaimana cara mengerjakan latihan soal?",
    answer: "Pilih topik yang ingin dilatih, kemudian klik tombol 'Latihan' pada kartu materi. Kamu akan diarahkan ke halaman latihan soal interaktif.",
  },
  {
    question: "Materi apa saja yang tersedia?",
    answer: "Saat ini tersedia materi Aljabar untuk siswa Kelas 7 SMP/MTS yang mencakup: Pengenalan Aljabar dan Persamaan & Pertidaksamaan Linear.",
  },
  {
    question: "Apakah bisa diakses dari HP/Smartphone?",
    answer: "Ya, platform ini sudah dioptimalkan untuk berbagai perangkat termasuk smartphone, tablet, dan komputer desktop. Kamu bisa belajar kapan saja dan di mana saja!",
  },
]

const features = [
  {
    icon: BookOpen,
    title: "Materi Pembelajaran",
    description: "Penjelasan materi yang lengkap dan mudah dipahami dengan contoh-contoh soal.",
    color: "bg-card-blue",
  },
  {
    icon: PlayCircle,
    title: "Video Tutorial",
    description: "Video pembelajaran interaktif untuk membantu memahami konsep dengan lebih baik.",
    color: "bg-card-orange",
  },
  {
    icon: PenLine,
    title: "Latihan Soal",
    description: "Soal-soal latihan interaktif dengan pembahasan untuk mengasah kemampuan.",
    color: "bg-card-green",
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left transition-colors active:bg-muted/50"
      >
        <span className="pr-4 text-sm sm:text-base font-medium text-foreground">{question}</span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">{answer}</p>
      </div>
    </div>
  )
}

export default function BantuanPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary py-10 sm:py-16 text-white">
          <div className="mx-auto max-w-7xl px-3 sm:px-4 text-center lg:px-8">
            <div className="mx-auto mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white/20">
              <HelpCircle className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold md:text-4xl lg:text-5xl">Pusat Bantuan</h1>
            <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-lg opacity-90">
              Temukan jawaban untuk pertanyaan umum dan panduan penggunaan platform
            </p>
          </div>
        </section>

        {/* Quick Start Guide */}
        <section className="py-10 sm:py-16">
          <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground md:text-3xl">
                Panduan Cepat
              </h2>
              <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">
                Ikuti langkah-langkah berikut untuk mulai belajar
              </p>
            </div>

            <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-card p-5 sm:p-6 text-center shadow-sm">
                <div className="mx-auto mb-3 sm:mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="mb-2 text-sm sm:text-base font-semibold text-foreground">Pilih Materi</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Pilih topik aljabar yang ingin kamu pelajari dari menu utama
                </p>
              </div>
              <div className="rounded-xl bg-card p-5 sm:p-6 text-center shadow-sm">
                <div className="mx-auto mb-3 sm:mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="mb-2 text-sm sm:text-base font-semibold text-foreground">Pelajari Konsep</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Baca materi atau tonton video untuk memahami konsep
                </p>
              </div>
              <div className="rounded-xl bg-card p-5 sm:p-6 text-center shadow-sm">
                <div className="mx-auto mb-3 sm:mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="mb-2 text-sm sm:text-base font-semibold text-foreground">Latihan Soal</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Uji pemahamanmu dengan mengerjakan latihan soal
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Explanation */}
        <section className="bg-muted py-10 sm:py-16">
          <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground md:text-3xl">
                Fitur Utama
              </h2>
              <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">
                Kenali fitur-fitur yang tersedia di platform ini
              </p>
            </div>

            <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 md:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-xl bg-card p-5 sm:p-6 shadow-sm">
                  <div className={`mb-3 sm:mb-4 inline-flex rounded-lg ${feature.color} p-2.5 sm:p-3`}>
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-sm sm:text-base font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Device Support */}
        <section className="py-10 sm:py-16">
          <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground md:text-3xl">
                Perangkat yang Didukung
              </h2>
              <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">
                Platform ini dapat diakses dari berbagai perangkat
              </p>
            </div>

            <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-card p-5 sm:p-6 text-center shadow-sm">
                <Smartphone className="mx-auto mb-3 h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                <h3 className="text-sm sm:text-base font-semibold text-foreground">Smartphone</h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">Android & iOS</p>
              </div>
              <div className="rounded-xl bg-card p-5 sm:p-6 text-center shadow-sm">
                <Monitor className="mx-auto mb-3 h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                <h3 className="text-sm sm:text-base font-semibold text-foreground">Komputer</h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">Desktop & Laptop</p>
              </div>
              <div className="col-span-2 rounded-xl bg-card p-5 sm:p-6 text-center shadow-sm md:col-span-1">
                <Search className="mx-auto mb-3 h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                <h3 className="text-sm sm:text-base font-semibold text-foreground">Browser</h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">Chrome, Safari, Firefox</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-muted py-10 sm:py-16">
          <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground md:text-3xl">
                Pertanyaan Umum (FAQ)
              </h2>
              <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">
                Jawaban untuk pertanyaan yang sering diajukan
              </p>
            </div>

            <div className="mx-auto mt-8 sm:mt-12 max-w-3xl rounded-xl bg-card p-4 sm:p-6 shadow-sm">
              {faqData.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-10 sm:py-16">
          <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground md:text-3xl">
                Masih Butuh Bantuan?
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
                Jika kamu tidak menemukan jawaban yang dicari, silakan hubungi kami
              </p>

              <div className="mt-6 sm:mt-8 rounded-xl bg-card p-5 sm:p-6 shadow-sm">
                <Mail className="mx-auto mb-3 h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                <h3 className="mb-2 text-sm sm:text-base font-semibold text-foreground">Hubungi Kami</h3>
                <a
                  href="mailto:sitinurambar.2022@mhs.unisda.ac.id"
                  className="text-xs sm:text-sm text-primary hover:underline break-all"
                >
                  sitinurambar.2022@mhs.unisda.ac.id
                </a>
              </div>

              <div className="mt-6 sm:mt-8">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium text-primary-foreground transition-transform active:scale-95 sm:hover:scale-105"
                >
                  <Home className="h-4 w-4" />
                  Kembali ke Beranda
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
