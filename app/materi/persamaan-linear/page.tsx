"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BookOpen, PlayCircle, PenLine, ChevronRight, ChevronLeft, CheckCircle2, XCircle } from "lucide-react"

type TabType = "materi" | "video" | "latihan"

function PersamaanLinearContent() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<TabType>("materi")

  useEffect(() => {
    const tab = searchParams.get("tab")
    if (tab === "materi" || tab === "video" || tab === "latihan") {
      setActiveTab(tab)
    }
  }, [searchParams])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-card-orange text-white py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center gap-2 text-sm mb-4 opacity-90">
            <a href="/" className="hover:underline">Beranda</a>
            <ChevronRight className="h-4 w-4" />
            <span>Persamaan &amp; Pertidaksamaan Linear</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            Persamaan &amp; Pertidaksamaan Linear
          </h1>
          <p className="text-lg opacity-90">Kelas 7/8 SMP/MTS</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-card border-b border-border sticky top-[72px] z-40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab("materi")}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "materi"
                  ? "border-card-orange text-card-orange"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <BookOpen className="h-4 w-4" />
              Materi
            </button>
            <button
              onClick={() => setActiveTab("video")}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "video"
                  ? "border-card-orange text-card-orange"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <PlayCircle className="h-4 w-4" />
              Video
            </button>
            <button
              onClick={() => setActiveTab("latihan")}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "latihan"
                  ? "border-card-orange text-card-orange"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <PenLine className="h-4 w-4" />
              Latihan
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {activeTab === "materi" && <MateriContent />}
          {activeTab === "video" && <VideoContent />}
          {activeTab === "latihan" && <LatihanContent />}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function PersamaanLinearPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Memuat...</div>}>
      <PersamaanLinearContent />
    </Suspense>
  )
}

function MateriContent() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Introduction */}
      <div className="bg-card rounded-xl p-6 lg:p-8 shadow-sm mb-8">
        <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
          Apa itu Persamaan Linear?
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          <strong className="text-foreground">Persamaan Linear</strong> adalah persamaan yang variabelnya berpangkat satu (tidak ada pangkat dua atau lebih). Persamaan linear merupakan salah satu konsep paling penting dalam matematika karena banyak digunakan untuk menyelesaikan masalah dalam kehidupan sehari-hari.
        </p>
        <div className="bg-card-orange/10 rounded-lg p-4 border-l-4 border-card-orange">
          <p className="text-foreground font-medium">
            Contoh Masalah Nyata:
          </p>
          <p className="text-muted-foreground mt-2">
            Harga 2 buku tulis dan 3 pensil adalah Rp15.000. Jika harga satu pensil Rp2.000, berapa harga satu buku tulis?
          </p>
          <p className="text-muted-foreground mt-2">
            Dalam persamaan: <strong className="text-card-orange">2x + 3(2000) = 15000</strong>
          </p>
        </div>
      </div>

      {/* PLSV */}
      <div className="bg-card rounded-xl p-6 lg:p-8 shadow-sm mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-card-orange flex items-center justify-center text-white font-bold">
            1
          </div>
          <h2 className="text-xl lg:text-2xl font-bold text-foreground">
            Persamaan Linear Satu Variabel (PLSV)
          </h2>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          PLSV adalah persamaan yang hanya memiliki satu variabel dengan pangkat tertinggi satu.
        </p>
        
        <div className="bg-muted rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-foreground mb-2">Bentuk Umum:</h4>
          <p className="text-2xl font-bold text-center text-card-orange py-2">ax + b = c</p>
          <p className="text-sm text-muted-foreground text-center">di mana a, b, c adalah bilangan real dan a tidak sama dengan 0</p>
        </div>

        <h4 className="font-semibold text-foreground mb-3">Cara Menyelesaikan PLSV:</h4>
        <div className="space-y-4">
          <div className="bg-muted rounded-lg p-4">
            <p className="text-foreground font-medium mb-2">Contoh 1: Selesaikan 3x + 5 = 14</p>
            <div className="space-y-1 text-muted-foreground">
              <p>3x + 5 = 14</p>
              <p>3x = 14 - 5 <span className="text-card-orange">(pindahkan 5 ke kanan)</span></p>
              <p>3x = 9</p>
              <p>x = 9 ÷ 3 <span className="text-card-orange">(bagi kedua ruas dengan 3)</span></p>
              <p className="font-bold text-card-orange">x = 3</p>
            </div>
          </div>
          
          <div className="bg-muted rounded-lg p-4">
            <p className="text-foreground font-medium mb-2">Contoh 2: Selesaikan 2x - 7 = x + 5</p>
            <div className="space-y-1 text-muted-foreground">
              <p>2x - 7 = x + 5</p>
              <p>2x - x = 5 + 7 <span className="text-card-orange">(kelompokkan suku sejenis)</span></p>
              <p className="font-bold text-card-orange">x = 12</p>
            </div>
          </div>
        </div>

        <div className="bg-card-orange/10 rounded-lg p-4 border border-card-orange/30 mt-4">
          <h4 className="font-semibold text-foreground mb-2">Tips Menyelesaikan PLSV:</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>1. Kumpulkan suku yang mengandung variabel di satu ruas</li>
            <li>2. Kumpulkan konstanta di ruas lainnya</li>
            <li>3. Sederhanakan kedua ruas</li>
            <li>4. Bagi dengan koefisien variabel</li>
          </ul>
        </div>
      </div>

      {/* PLDV */}
      <div className="bg-card rounded-xl p-6 lg:p-8 shadow-sm mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-card-blue flex items-center justify-center text-white font-bold">
            2
          </div>
          <h2 className="text-xl lg:text-2xl font-bold text-foreground">
            Persamaan Linear Dua Variabel (PLDV)
          </h2>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          PLDV adalah persamaan yang memiliki dua variabel dengan pangkat tertinggi satu.
        </p>
        
        <div className="bg-muted rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-foreground mb-2">Bentuk Umum:</h4>
          <p className="text-2xl font-bold text-center text-card-blue py-2">ax + by = c</p>
          <p className="text-sm text-muted-foreground text-center">di mana a, b, c adalah bilangan real, a dan b tidak sama dengan 0</p>
        </div>

        <h4 className="font-semibold text-foreground mb-3">Metode Penyelesaian SPLDV:</h4>
        <p className="text-muted-foreground mb-4">Sistem Persamaan Linear Dua Variabel (SPLDV) terdiri dari dua PLDV yang diselesaikan bersamaan.</p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-card-blue/10 rounded-lg p-4 border border-card-blue/30">
            <h5 className="font-semibold text-card-blue mb-2">Metode Substitusi</h5>
            <p className="text-sm text-muted-foreground">Nyatakan satu variabel dalam variabel lain, lalu substitusikan ke persamaan kedua.</p>
          </div>
          <div className="bg-card-blue/10 rounded-lg p-4 border border-card-blue/30">
            <h5 className="font-semibold text-card-blue mb-2">Metode Eliminasi</h5>
            <p className="text-sm text-muted-foreground">Hilangkan salah satu variabel dengan menjumlahkan atau mengurangkan persamaan.</p>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-4">
          <p className="text-foreground font-medium mb-2">Contoh SPLDV:</p>
          <p className="text-muted-foreground mb-2">Selesaikan sistem persamaan berikut:</p>
          <div className="text-center mb-3">
            <p className="text-foreground">x + y = 7</p>
            <p className="text-foreground">x - y = 3</p>
          </div>
          <p className="text-foreground font-medium">Penyelesaian (Metode Eliminasi):</p>
          <div className="space-y-1 text-muted-foreground mt-2">
            <p>x + y = 7</p>
            <p>x - y = 3 <span className="text-card-blue">+</span></p>
            <p className="border-t border-border pt-1">2x = 10</p>
            <p className="font-bold text-card-blue">x = 5</p>
            <p className="mt-2">Substitusi x = 5 ke persamaan pertama:</p>
            <p>5 + y = 7</p>
            <p className="font-bold text-card-blue">y = 2</p>
            <p className="mt-2 font-bold">Jadi, x = 5 dan y = 2</p>
          </div>
        </div>
      </div>

      {/* Pertidaksamaan Linear */}
      <div className="bg-card rounded-xl p-6 lg:p-8 shadow-sm mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-card-green flex items-center justify-center text-white font-bold">
            3
          </div>
          <h2 className="text-xl lg:text-2xl font-bold text-foreground">
            Pertidaksamaan Linear Satu Variabel
          </h2>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Pertidaksamaan linear adalah kalimat terbuka yang dihubungkan dengan tanda ketidaksamaan seperti &lt;, &gt;, ≤, atau ≥.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Tanda Pertidaksamaan:</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><strong>&lt;</strong> : kurang dari</li>
              <li><strong>&gt;</strong> : lebih dari</li>
              <li><strong>≤</strong> : kurang dari atau sama dengan</li>
              <li><strong>≥</strong> : lebih dari atau sama dengan</li>
            </ul>
          </div>
          <div className="bg-card-green/10 rounded-lg p-4 border border-card-green/30">
            <h4 className="font-semibold text-foreground mb-2">Aturan Penting!</h4>
            <p className="text-sm text-muted-foreground">
              Jika kedua ruas dikalikan atau dibagi dengan bilangan <strong>negatif</strong>, maka tanda pertidaksamaan <strong>dibalik</strong>.
            </p>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-4 space-y-4">
          <div>
            <p className="text-foreground font-medium mb-2">Contoh 1: Selesaikan 2x + 3 &lt; 11</p>
            <div className="space-y-1 text-muted-foreground">
              <p>2x + 3 &lt; 11</p>
              <p>2x &lt; 11 - 3</p>
              <p>2x &lt; 8</p>
              <p className="font-bold text-card-green">x &lt; 4</p>
              <p className="text-sm mt-1">Himpunan penyelesaian: {`{x | x < 4, x ∈ R}`}</p>
            </div>
          </div>
          <div>
            <p className="text-foreground font-medium mb-2">Contoh 2: Selesaikan -3x ≥ 12</p>
            <div className="space-y-1 text-muted-foreground">
              <p>-3x ≥ 12</p>
              <p>x ≤ 12 ÷ (-3) <span className="text-card-green">(tanda dibalik karena dibagi negatif)</span></p>
              <p className="font-bold text-card-green">x ≤ -4</p>
            </div>
          </div>
        </div>
      </div>

      {/* Masalah Kehidupan Nyata */}
      <div className="bg-card rounded-xl p-6 lg:p-8 shadow-sm mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-card-red flex items-center justify-center text-white font-bold">
            4
          </div>
          <h2 className="text-xl lg:text-2xl font-bold text-foreground">
            Menyelesaikan Masalah Kehidupan Nyata
          </h2>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Persamaan dan pertidaksamaan linear sangat berguna untuk menyelesaikan berbagai masalah dalam kehidupan sehari-hari.
        </p>

        <div className="space-y-4">
          <div className="bg-muted rounded-lg p-4">
            <p className="text-foreground font-medium mb-2">Soal Cerita 1:</p>
            <p className="text-muted-foreground mb-3">
              Umur Ayah 3 kali umur Ani. Selisih umur mereka adalah 30 tahun. Berapa umur Ani?
            </p>
            <p className="text-foreground font-medium">Penyelesaian:</p>
            <div className="space-y-1 text-muted-foreground mt-2">
              <p>Misalkan umur Ani = x tahun</p>
              <p>Maka umur Ayah = 3x tahun</p>
              <p>Selisih umur: 3x - x = 30</p>
              <p>2x = 30</p>
              <p className="font-bold text-card-red">x = 15 tahun</p>
              <p className="mt-1">Jadi, umur Ani adalah 15 tahun</p>
            </div>
          </div>

          <div className="bg-muted rounded-lg p-4">
            <p className="text-foreground font-medium mb-2">Soal Cerita 2:</p>
            <p className="text-muted-foreground mb-3">
              Harga 2 kg apel dan 3 kg jeruk adalah Rp85.000. Harga 4 kg apel dan 2 kg jeruk adalah Rp90.000. Berapa harga 1 kg apel dan 1 kg jeruk?
            </p>
            <p className="text-foreground font-medium">Penyelesaian:</p>
            <div className="space-y-1 text-muted-foreground mt-2">
              <p>Misalkan harga 1 kg apel = x, harga 1 kg jeruk = y</p>
              <p>Persamaan 1: 2x + 3y = 85.000</p>
              <p>Persamaan 2: 4x + 2y = 90.000</p>
              <p className="mt-2">Eliminasi x (kalikan persamaan 1 dengan 2):</p>
              <p>4x + 6y = 170.000</p>
              <p>4x + 2y = 90.000 -</p>
              <p className="border-t border-border pt-1">4y = 80.000</p>
              <p className="font-bold text-card-red">y = 20.000</p>
              <p className="mt-2">Substitusi y = 20.000:</p>
              <p>2x + 3(20.000) = 85.000</p>
              <p>2x = 85.000 - 60.000 = 25.000</p>
              <p className="font-bold text-card-red">x = 12.500</p>
              <p className="mt-1 font-bold">Jadi, harga 1 kg apel = Rp12.500 dan 1 kg jeruk = Rp20.000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ringkasan */}
      <div className="bg-card-orange text-white rounded-xl p-6 lg:p-8">
        <h2 className="text-xl font-bold mb-4">Ringkasan</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <span><strong>PLSV</strong> memiliki satu variabel, bentuk umum: ax + b = c</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <span><strong>PLDV</strong> memiliki dua variabel, bentuk umum: ax + by = c</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <span><strong>SPLDV</strong> diselesaikan dengan metode substitusi atau eliminasi</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <span><strong>Pertidaksamaan</strong>: tanda dibalik jika dikali/dibagi bilangan negatif</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <span>Langkah soal cerita: pahami masalah, buat model matematika, selesaikan, periksa jawaban</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

function VideoContent() {
  const videos = [
    {
      id: 1,
      title: "Persamaan Linear Satu Variabel (PLSV)",
      duration: "14:25",
      description: "Memahami konsep dan cara menyelesaikan PLSV",
    },
    {
      id: 2,
      title: "Persamaan Linear Dua Variabel (PLDV)",
      duration: "16:40",
      description: "Bentuk umum dan penerapan PLDV",
    },
    {
      id: 3,
      title: "Metode Substitusi dan Eliminasi",
      duration: "20:15",
      description: "Dua metode untuk menyelesaikan SPLDV",
    },
    {
      id: 4,
      title: "Pertidaksamaan Linear Satu Variabel",
      duration: "13:50",
      description: "Memahami dan menyelesaikan pertidaksamaan",
    },
    {
      id: 5,
      title: "Soal Cerita Persamaan Linear",
      duration: "18:30",
      description: "Menyelesaikan masalah kehidupan nyata",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-card rounded-xl p-6 lg:p-8 shadow-sm mb-8">
        <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
          Video Tutorial
        </h2>
        <p className="text-muted-foreground mb-6">
          Pelajari materi Persamaan &amp; Pertidaksamaan Linear melalui video tutorial yang interaktif dan mudah dipahami.
        </p>

        <div className="grid gap-4">
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex gap-4 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer group"
            >
              <div className="relative w-40 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-card-orange/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-card-orange/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PlayCircle className="h-6 w-6 text-white" />
                  </div>
                </div>
                <span className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
                  {video.duration}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground group-hover:text-card-orange transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {video.description}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Video {video.id} dari {videos.length}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card-orange/10 border border-card-orange/30 rounded-xl p-6">
        <h3 className="font-semibold text-foreground mb-2">Tips Belajar dari Video</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-card-orange">1.</span>
            Siapkan buku catatan untuk mencatat rumus dan contoh penting
          </li>
          <li className="flex items-start gap-2">
            <span className="text-card-orange">2.</span>
            Pause video saat ada contoh soal, coba kerjakan sendiri dulu
          </li>
          <li className="flex items-start gap-2">
            <span className="text-card-orange">3.</span>
            Ulangi bagian yang belum dipahami
          </li>
          <li className="flex items-start gap-2">
            <span className="text-card-orange">4.</span>
            Setelah menonton, kerjakan latihan soal untuk mengukur pemahaman
          </li>
        </ul>
      </div>
    </div>
  )
}

function LatihanContent() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(10).fill(false))
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const questions = [
    {
      question: "Selesaikan persamaan: 3x + 7 = 22",
      options: ["x = 3", "x = 5", "x = 7", "x = 9"],
      correct: 1,
      explanation: "3x + 7 = 22 → 3x = 22 - 7 → 3x = 15 → x = 5"
    },
    {
      question: "Nilai x yang memenuhi persamaan 2x - 5 = x + 3 adalah...",
      options: ["x = 6", "x = 8", "x = -8", "x = -2"],
      correct: 1,
      explanation: "2x - 5 = x + 3 → 2x - x = 3 + 5 → x = 8"
    },
    {
      question: "Jika 4(x - 2) = 20, maka nilai x adalah...",
      options: ["x = 5", "x = 7", "x = 3", "x = 9"],
      correct: 1,
      explanation: "4(x - 2) = 20 → 4x - 8 = 20 → 4x = 28 → x = 7"
    },
    {
      question: "Himpunan penyelesaian dari 2x + 4 < 12 adalah...",
      options: ["x < 4", "x > 4", "x < 8", "x > 8"],
      correct: 0,
      explanation: "2x + 4 < 12 → 2x < 8 → x < 4"
    },
    {
      question: "Jika -2x ≥ 6, maka nilai x adalah...",
      options: ["x ≥ -3", "x ≤ -3", "x ≥ 3", "x ≤ 3"],
      correct: 1,
      explanation: "-2x ≥ 6 → x ≤ -3 (tanda dibalik karena dibagi bilangan negatif)"
    },
    {
      question: "Dari sistem persamaan x + y = 10 dan x - y = 4, nilai x adalah...",
      options: ["x = 3", "x = 5", "x = 7", "x = 9"],
      correct: 2,
      explanation: "x + y = 10 dan x - y = 4. Eliminasi: 2x = 14, maka x = 7"
    },
    {
      question: "Dari sistem persamaan x + y = 10 dan x - y = 4, nilai y adalah...",
      options: ["y = 2", "y = 3", "y = 4", "y = 5"],
      correct: 1,
      explanation: "Dari x = 7 dan x + y = 10, maka 7 + y = 10, sehingga y = 3"
    },
    {
      question: "Umur Budi 5 tahun lebih tua dari Ani. Jumlah umur mereka 31 tahun. Umur Ani adalah...",
      options: ["13 tahun", "15 tahun", "18 tahun", "20 tahun"],
      correct: 0,
      explanation: "Misalkan umur Ani = x, umur Budi = x + 5. x + (x + 5) = 31 → 2x = 26 → x = 13"
    },
    {
      question: "Harga 3 pensil dan 2 buku adalah Rp16.000. Harga 1 pensil dan 3 buku adalah Rp17.000. Harga 1 pensil adalah...",
      options: ["Rp2.000", "Rp3.000", "Rp4.000", "Rp5.000"],
      correct: 0,
      explanation: "3p + 2b = 16.000 ... (1), p + 3b = 17.000 ... (2). Dari (2): p = 17.000 - 3b. Substitusi ke (1): 3(17.000 - 3b) + 2b = 16.000 → 51.000 - 9b + 2b = 16.000 → -7b = -35.000 → b = 5.000. Maka p = 17.000 - 15.000 = 2.000"
    },
    {
      question: "Jika 5x - 3 = 2x + 9, maka nilai dari 2x adalah...",
      options: ["4", "6", "8", "10"],
      correct: 2,
      explanation: "5x - 3 = 2x + 9 → 3x = 12 → x = 4. Maka 2x = 8"
    }
  ]

  const handleAnswer = (index: number) => {
    if (answeredQuestions[currentQuestion]) return
    
    setSelectedAnswer(index)
    const correct = index === questions[currentQuestion].correct
    setIsCorrect(correct)
    
    if (correct) {
      setScore(score + 1)
    }
    
    const newAnswered = [...answeredQuestions]
    newAnswered[currentQuestion] = true
    setAnsweredQuestions(newAnswered)
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setIsCorrect(null)
    } else {
      setShowResult(true)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(null)
      setIsCorrect(null)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnsweredQuestions(new Array(10).fill(false))
    setIsCorrect(null)
  }

  if (showResult) {
    const percentage = (score / questions.length) * 100
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-card rounded-xl p-8 shadow-sm text-center">
          <div className={`h-24 w-24 rounded-full mx-auto mb-6 flex items-center justify-center ${
            percentage >= 70 ? "bg-card-green" : percentage >= 50 ? "bg-card-orange" : "bg-card-red"
          }`}>
            <span className="text-3xl font-bold text-white">{score}/{questions.length}</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            {percentage >= 70 ? "Luar Biasa!" : percentage >= 50 ? "Cukup Baik!" : "Tetap Semangat!"}
          </h2>
          <p className="text-muted-foreground mb-6">
            Kamu menjawab benar {score} dari {questions.length} soal ({percentage}%)
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={resetQuiz} className="bg-card-orange hover:bg-card-orange/90 text-white">
              Ulangi Latihan
            </Button>
            <Button variant="outline" onClick={() => window.location.href = "/"}>
              Kembali ke Menu
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="bg-card rounded-xl p-4 shadow-sm mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">Progres Latihan</span>
          <span className="text-sm text-muted-foreground">{currentQuestion + 1} dari {questions.length}</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-card-orange transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-card rounded-xl p-6 lg:p-8 shadow-sm mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="h-8 w-8 rounded-full bg-card-orange text-white flex items-center justify-center text-sm font-bold">
            {currentQuestion + 1}
          </span>
          <span className="text-sm text-muted-foreground">Soal {currentQuestion + 1}</span>
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-6">
          {questions[currentQuestion].question}
        </h3>

        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={answeredQuestions[currentQuestion]}
              className={`w-full p-4 rounded-lg text-left transition-all ${
                selectedAnswer === index
                  ? index === questions[currentQuestion].correct
                    ? "bg-card-green text-white"
                    : "bg-card-red text-white"
                  : answeredQuestions[currentQuestion] && index === questions[currentQuestion].correct
                    ? "bg-card-green text-white"
                    : "bg-muted hover:bg-muted/80 text-foreground"
              } ${answeredQuestions[currentQuestion] ? "cursor-default" : "cursor-pointer"}`}
            >
              <div className="flex items-center gap-3">
                <span className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                  selectedAnswer === index
                    ? "bg-white/20 text-white"
                    : "bg-background text-foreground"
                }`}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{option}</span>
                {answeredQuestions[currentQuestion] && index === questions[currentQuestion].correct && (
                  <CheckCircle2 className="h-5 w-5 ml-auto" />
                )}
                {selectedAnswer === index && index !== questions[currentQuestion].correct && (
                  <XCircle className="h-5 w-5 ml-auto" />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Feedback */}
        {isCorrect !== null && (
          <div className={`mt-6 p-4 rounded-lg ${isCorrect ? "bg-card-green/10 border border-card-green/30" : "bg-card-red/10 border border-card-red/30"}`}>
            <div className="flex items-center gap-2 mb-2">
              {isCorrect ? (
                <CheckCircle2 className="h-5 w-5 text-card-green" />
              ) : (
                <XCircle className="h-5 w-5 text-card-red" />
              )}
              <span className={`font-semibold ${isCorrect ? "text-card-green" : "text-card-red"}`}>
                {isCorrect ? "Benar!" : "Kurang Tepat"}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {questions[currentQuestion].explanation}
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          className="gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Sebelumnya
        </Button>
        
        <div className="flex gap-1">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentQuestion
                  ? "bg-card-orange"
                  : answeredQuestions[index]
                    ? "bg-card-green"
                    : "bg-muted"
              }`}
            />
          ))}
        </div>

        <Button
          onClick={nextQuestion}
          disabled={!answeredQuestions[currentQuestion]}
          className="gap-2 bg-card-orange hover:bg-card-orange/90 text-white"
        >
          {currentQuestion === questions.length - 1 ? "Lihat Hasil" : "Selanjutnya"}
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
