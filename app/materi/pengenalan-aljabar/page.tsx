"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BookOpen, PlayCircle, PenLine, ChevronRight, ChevronLeft, CheckCircle2, XCircle } from "lucide-react"

type TabType = "materi" | "video" | "latihan"

export default function PengenalanAljabarPage() {
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
      <div className="bg-card-blue text-white py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center gap-2 text-sm mb-4 opacity-90">
            <a href="/" className="hover:underline">Beranda</a>
            <ChevronRight className="h-4 w-4" />
            <span>Pengenalan Aljabar</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            Pengenalan Aljabar
          </h1>
          <p className="text-lg opacity-90">Kelas 7 SMP/MTS</p>
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
                  ? "border-primary text-primary"
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
                  ? "border-primary text-primary"
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
                  ? "border-primary text-primary"
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

function MateriContent() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Introduction */}
      <div className="bg-card rounded-xl p-6 lg:p-8 shadow-sm mb-8">
        <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
          Apa itu Aljabar?
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Aljabar adalah cabang matematika yang mempelajari simbol-simbol dan aturan untuk memanipulasi simbol-simbol tersebut. Dalam aljabar, kita menggunakan huruf untuk mewakili bilangan yang belum diketahui nilainya.
        </p>
        <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
          <p className="text-foreground font-medium">
            Contoh: Jika kamu memiliki beberapa apel dan ditambah 5 apel lagi menjadi 12 apel, berapa apel yang kamu miliki sebelumnya?
          </p>
          <p className="text-muted-foreground mt-2">
            Dalam aljabar: <strong className="text-primary">x + 5 = 12</strong>, maka <strong className="text-primary">x = 7</strong>
          </p>
        </div>
      </div>

      {/* Variabel */}
      <div className="bg-card rounded-xl p-6 lg:p-8 shadow-sm mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-card-blue flex items-center justify-center text-white font-bold">
            1
          </div>
          <h2 className="text-xl lg:text-2xl font-bold text-foreground">
            Variabel
          </h2>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          <strong className="text-foreground">Variabel</strong> adalah simbol (biasanya huruf) yang mewakili suatu bilangan yang belum diketahui nilainya. Variabel sering disebut juga sebagai peubah.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Contoh Variabel:</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-card-blue"></span>
                <span><strong>x</strong> dalam 3x + 5</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-card-blue"></span>
                <span><strong>y</strong> dalam 2y - 7</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-card-blue"></span>
                <span><strong>a</strong> dan <strong>b</strong> dalam a + b = 10</span>
              </li>
            </ul>
          </div>
          <div className="bg-card-blue/10 rounded-lg p-4 border border-card-blue/30">
            <h4 className="font-semibold text-foreground mb-2">Ingat!</h4>
            <p className="text-muted-foreground text-sm">
              Variabel berbeda dengan konstanta. Nilai variabel bisa berubah-ubah, sedangkan konstanta nilainya tetap.
            </p>
          </div>
        </div>
      </div>

      {/* Koefisien */}
      <div className="bg-card rounded-xl p-6 lg:p-8 shadow-sm mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-card-orange flex items-center justify-center text-white font-bold">
            2
          </div>
          <h2 className="text-xl lg:text-2xl font-bold text-foreground">
            Koefisien
          </h2>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          <strong className="text-foreground">Koefisien</strong> adalah bilangan yang menjadi faktor dari suatu variabel. Koefisien terletak di depan variabel.
        </p>
        <div className="bg-muted rounded-lg p-6 text-center mb-4">
          <p className="text-3xl font-bold text-foreground mb-2">
            <span className="text-card-orange">5</span>x + <span className="text-card-orange">3</span>y - 7
          </p>
          <p className="text-muted-foreground">
            Koefisien dari x adalah <strong className="text-card-orange">5</strong>, koefisien dari y adalah <strong className="text-card-orange">3</strong>
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          <div className="bg-card-orange/10 rounded-lg p-3 text-center border border-card-orange/30">
            <p className="font-bold text-xl text-card-orange">7x</p>
            <p className="text-sm text-muted-foreground">Koefisien = 7</p>
          </div>
          <div className="bg-card-orange/10 rounded-lg p-3 text-center border border-card-orange/30">
            <p className="font-bold text-xl text-card-orange">-2y</p>
            <p className="text-sm text-muted-foreground">Koefisien = -2</p>
          </div>
          <div className="bg-card-orange/10 rounded-lg p-3 text-center border border-card-orange/30">
            <p className="font-bold text-xl text-card-orange">x</p>
            <p className="text-sm text-muted-foreground">Koefisien = 1</p>
          </div>
        </div>
      </div>

      {/* Konstanta */}
      <div className="bg-card rounded-xl p-6 lg:p-8 shadow-sm mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-card-green flex items-center justify-center text-white font-bold">
            3
          </div>
          <h2 className="text-xl lg:text-2xl font-bold text-foreground">
            Konstanta
          </h2>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          <strong className="text-foreground">Konstanta</strong> adalah suku dalam bentuk aljabar yang berupa bilangan dan tidak memuat variabel. Nilai konstanta selalu tetap.
        </p>
        <div className="bg-muted rounded-lg p-6 text-center mb-4">
          <p className="text-3xl font-bold text-foreground mb-2">
            4x + 2y + <span className="text-card-green">8</span>
          </p>
          <p className="text-muted-foreground">
            Konstanta pada bentuk aljabar di atas adalah <strong className="text-card-green">8</strong>
          </p>
        </div>
        <div className="bg-card-green/10 rounded-lg p-4 border border-card-green/30">
          <h4 className="font-semibold text-foreground mb-2">Contoh Lainnya:</h4>
          <ul className="space-y-1 text-muted-foreground">
            <li>3x - <strong className="text-card-green">5</strong> (konstanta = -5)</li>
            <li>2a + 4b + <strong className="text-card-green">10</strong> (konstanta = 10)</li>
            <li>y - <strong className="text-card-green">1</strong> (konstanta = -1)</li>
          </ul>
        </div>
      </div>

      {/* Suku */}
      <div className="bg-card rounded-xl p-6 lg:p-8 shadow-sm mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-card-red flex items-center justify-center text-white font-bold">
            4
          </div>
          <h2 className="text-xl lg:text-2xl font-bold text-foreground">
            Suku
          </h2>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          <strong className="text-foreground">Suku</strong> adalah bagian dari bentuk aljabar yang dipisahkan oleh tanda penjumlahan (+) atau pengurangan (-).
        </p>
        <div className="bg-muted rounded-lg p-6 text-center mb-4">
          <p className="text-2xl font-bold text-foreground mb-2">
            <span className="bg-card-red/20 px-2 py-1 rounded text-card-red">3x²</span>
            {" + "}
            <span className="bg-card-blue/20 px-2 py-1 rounded text-card-blue">5x</span>
            {" - "}
            <span className="bg-card-green/20 px-2 py-1 rounded text-card-green">7</span>
          </p>
          <p className="text-muted-foreground mt-3">
            Bentuk aljabar di atas memiliki <strong>3 suku</strong>
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Jenis-jenis Bentuk Aljabar:</h4>
            <div className="bg-muted rounded-lg p-3">
              <p className="font-medium text-foreground">Suku Satu (Monomial)</p>
              <p className="text-sm text-muted-foreground">Contoh: 5x, 3y², -2ab</p>
            </div>
            <div className="bg-muted rounded-lg p-3">
              <p className="font-medium text-foreground">Suku Dua (Binomial)</p>
              <p className="text-sm text-muted-foreground">Contoh: 2x + 3, a - b</p>
            </div>
            <div className="bg-muted rounded-lg p-3">
              <p className="font-medium text-foreground">Suku Tiga (Trinomial)</p>
              <p className="text-sm text-muted-foreground">Contoh: x² + 2x + 1</p>
            </div>
          </div>
          <div className="bg-card-red/10 rounded-lg p-4 border border-card-red/30">
            <h4 className="font-semibold text-foreground mb-2">Suku Sejenis</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Suku-suku yang memiliki variabel dan pangkat yang sama disebut suku sejenis.
            </p>
            <p className="text-sm text-foreground">
              <strong>3x</strong> dan <strong>5x</strong> adalah suku sejenis
            </p>
            <p className="text-sm text-foreground">
              <strong>2x</strong> dan <strong>2y</strong> bukan suku sejenis
            </p>
          </div>
        </div>
      </div>

      {/* Operasi Hitung Dasar */}
      <div className="bg-card rounded-xl p-6 lg:p-8 shadow-sm mb-8">
        <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-6">
          Operasi Hitung Dasar Aljabar
        </h2>
        
        {/* Penjumlahan */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-card-blue mb-3 flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-card-blue text-white flex items-center justify-center text-sm">+</span>
            Penjumlahan
          </h3>
          <p className="text-muted-foreground mb-4">
            Penjumlahan bentuk aljabar dilakukan dengan menjumlahkan suku-suku sejenis.
          </p>
          <div className="bg-muted rounded-lg p-4 space-y-3">
            <div>
              <p className="text-foreground font-medium">Contoh 1:</p>
              <p className="text-muted-foreground">3x + 5x = <strong className="text-card-blue">(3 + 5)x = 8x</strong></p>
            </div>
            <div>
              <p className="text-foreground font-medium">Contoh 2:</p>
              <p className="text-muted-foreground">(4x + 3) + (2x + 5) = 4x + 2x + 3 + 5 = <strong className="text-card-blue">6x + 8</strong></p>
            </div>
            <div>
              <p className="text-foreground font-medium">Contoh 3:</p>
              <p className="text-muted-foreground">(2a + 3b) + (5a - b) = 2a + 5a + 3b - b = <strong className="text-card-blue">7a + 2b</strong></p>
            </div>
          </div>
        </div>

        {/* Pengurangan */}
        <div>
          <h3 className="text-lg font-semibold text-card-red mb-3 flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-card-red text-white flex items-center justify-center text-sm">-</span>
            Pengurangan
          </h3>
          <p className="text-muted-foreground mb-4">
            Pengurangan bentuk aljabar dilakukan dengan mengurangkan suku-suku sejenis. Ingat: mengurangi sama dengan menambah lawan bilangannya.
          </p>
          <div className="bg-muted rounded-lg p-4 space-y-3">
            <div>
              <p className="text-foreground font-medium">Contoh 1:</p>
              <p className="text-muted-foreground">8x - 3x = <strong className="text-card-red">(8 - 3)x = 5x</strong></p>
            </div>
            <div>
              <p className="text-foreground font-medium">Contoh 2:</p>
              <p className="text-muted-foreground">(7x + 4) - (2x + 1) = 7x - 2x + 4 - 1 = <strong className="text-card-red">5x + 3</strong></p>
            </div>
            <div>
              <p className="text-foreground font-medium">Contoh 3:</p>
              <p className="text-muted-foreground">(5a - 2b) - (3a + 4b) = 5a - 3a - 2b - 4b = <strong className="text-card-red">2a - 6b</strong></p>
            </div>
          </div>
        </div>
      </div>

      {/* Ringkasan */}
      <div className="bg-primary text-primary-foreground rounded-xl p-6 lg:p-8">
        <h2 className="text-xl font-bold mb-4">Ringkasan</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <span><strong>Variabel</strong> adalah simbol yang mewakili bilangan yang belum diketahui</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <span><strong>Koefisien</strong> adalah bilangan di depan variabel</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <span><strong>Konstanta</strong> adalah bilangan tanpa variabel</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <span><strong>Suku</strong> adalah bagian aljabar yang dipisahkan oleh + atau -</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <span>Operasi penjumlahan dan pengurangan hanya dapat dilakukan pada <strong>suku sejenis</strong></span>
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
      title: "Pengenalan Aljabar - Variabel dan Konstanta",
      duration: "12:34",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    },
    {
      id: 2,
      title: "Memahami Koefisien dan Suku dalam Aljabar",
      duration: "15:20",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    },
    {
      id: 3,
      title: "Operasi Penjumlahan Bentuk Aljabar",
      duration: "18:45",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    },
    {
      id: 4,
      title: "Operasi Pengurangan Bentuk Aljabar",
      duration: "14:10",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-card rounded-xl p-6 lg:p-8 shadow-sm mb-8">
        <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
          Video Tutorial
        </h2>
        <p className="text-muted-foreground mb-6">
          Pelajari materi Pengenalan Aljabar melalui video tutorial yang interaktif dan mudah dipahami.
        </p>

        <div className="grid gap-4">
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex gap-4 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer group"
            >
              <div className="relative w-40 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-foreground/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-card-blue/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PlayCircle className="h-6 w-6 text-white" />
                  </div>
                </div>
                <span className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
                  {video.duration}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Video {video.id} dari 4
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 text-center">
        <PlayCircle className="h-12 w-12 text-primary mx-auto mb-3" />
        <h3 className="font-semibold text-foreground mb-2">Ingin video lebih banyak?</h3>
        <p className="text-muted-foreground text-sm mb-4">
          Akses ratusan video pembelajaran matematika lainnya dengan berlangganan premium.
        </p>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          Lihat Paket Premium
        </Button>
      </div>
    </div>
  )
}

function LatihanContent() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([])

  const questions = [
    {
      question: "Pada bentuk aljabar 5x + 3, manakah yang merupakan variabel?",
      options: ["5", "x", "3", "+"],
      correctAnswer: 1,
      explanation: "Variabel adalah simbol (huruf) yang mewakili bilangan yang belum diketahui. Pada 5x + 3, variabelnya adalah x."
    },
    {
      question: "Berapakah koefisien dari y pada bentuk aljabar 7y - 4?",
      options: ["4", "-4", "7", "y"],
      correctAnswer: 2,
      explanation: "Koefisien adalah bilangan di depan variabel. Pada 7y - 4, koefisien dari y adalah 7."
    },
    {
      question: "Konstanta pada bentuk aljabar 3x² + 2x - 8 adalah...",
      options: ["3", "2", "-8", "x"],
      correctAnswer: 2,
      explanation: "Konstanta adalah suku yang tidak memuat variabel. Pada 3x² + 2x - 8, konstantanya adalah -8."
    },
    {
      question: "Hasil dari 4x + 3x adalah...",
      options: ["7x²", "7x", "12x", "x⁷"],
      correctAnswer: 1,
      explanation: "4x + 3x = (4 + 3)x = 7x. Kita hanya menjumlahkan koefisiennya karena variabelnya sama."
    },
    {
      question: "Hasil dari (6a + 5) - (2a + 3) adalah...",
      options: ["4a + 8", "4a + 2", "8a + 2", "8a + 8"],
      correctAnswer: 1,
      explanation: "(6a + 5) - (2a + 3) = 6a - 2a + 5 - 3 = 4a + 2"
    },
    {
      question: "Berapa jumlah suku pada bentuk aljabar 2x² - 5x + 7?",
      options: ["1", "2", "3", "4"],
      correctAnswer: 2,
      explanation: "Bentuk aljabar 2x² - 5x + 7 memiliki 3 suku: 2x², -5x, dan 7."
    },
    {
      question: "Manakah pasangan suku yang sejenis?",
      options: ["3x dan 3y", "2x² dan 5x", "4ab dan 7ab", "x dan x²"],
      correctAnswer: 2,
      explanation: "Suku sejenis adalah suku dengan variabel dan pangkat yang sama. 4ab dan 7ab keduanya memiliki variabel ab."
    },
    {
      question: "Hasil dari 8y - 5y + 2y adalah...",
      options: ["15y", "5y", "y", "11y"],
      correctAnswer: 1,
      explanation: "8y - 5y + 2y = (8 - 5 + 2)y = 5y"
    },
    {
      question: "Pada bentuk aljabar -3m + 7, koefisien dari m adalah...",
      options: ["3", "-3", "7", "m"],
      correctAnswer: 1,
      explanation: "Koefisien adalah bilangan di depan variabel (termasuk tandanya). Pada -3m, koefisiennya adalah -3."
    },
    {
      question: "Hasil dari (3p + 4q) + (2p - q) adalah...",
      options: ["5p + 3q", "5p + 5q", "p + 3q", "5p - 3q"],
      correctAnswer: 0,
      explanation: "(3p + 4q) + (2p - q) = 3p + 2p + 4q - q = 5p + 3q"
    }
  ]

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return
    setSelectedAnswer(answerIndex)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return
    
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer
    if (isCorrect) {
      setScore(score + 1)
    }
    
    const newAnswered = [...answeredQuestions]
    newAnswered[currentQuestion] = isCorrect
    setAnsweredQuestions(newAnswered)
    
    setShowResult(true)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(null)
      setShowResult(false)
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnsweredQuestions([])
  }

  const isLastQuestion = currentQuestion === questions.length - 1
  const allAnswered = answeredQuestions.length === questions.length

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress */}
      <div className="bg-card rounded-xl p-4 shadow-sm mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">
            Soal {currentQuestion + 1} dari {questions.length}
          </span>
          <span className="text-sm font-medium text-primary">
            Skor: {score}/{answeredQuestions.length}
          </span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
        <div className="flex gap-1 mt-3">
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentQuestion(index)
                setSelectedAnswer(null)
                setShowResult(false)
              }}
              className={`h-2 flex-1 rounded-full transition-colors ${
                index === currentQuestion
                  ? "bg-primary"
                  : answeredQuestions[index] !== undefined
                  ? answeredQuestions[index]
                    ? "bg-card-green"
                    : "bg-card-red"
                  : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <div className="bg-card rounded-xl p-6 lg:p-8 shadow-sm mb-6">
        <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-6">
          {questions[currentQuestion].question}
        </h3>

        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => {
            const isSelected = selectedAnswer === index
            const isCorrect = index === questions[currentQuestion].correctAnswer
            
            let buttonClass = "w-full p-4 text-left rounded-lg border-2 transition-all "
            
            if (showResult) {
              if (isCorrect) {
                buttonClass += "border-card-green bg-card-green/10 text-foreground"
              } else if (isSelected && !isCorrect) {
                buttonClass += "border-card-red bg-card-red/10 text-foreground"
              } else {
                buttonClass += "border-border bg-muted text-muted-foreground"
              }
            } else {
              if (isSelected) {
                buttonClass += "border-primary bg-primary/10 text-foreground"
              } else {
                buttonClass += "border-border hover:border-primary/50 hover:bg-muted text-foreground"
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={buttonClass}
                disabled={showResult}
              >
                <div className="flex items-center gap-3">
                  <span className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    showResult && isCorrect
                      ? "bg-card-green text-white"
                      : showResult && isSelected && !isCorrect
                      ? "bg-card-red text-white"
                      : isSelected
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="font-medium">{option}</span>
                  {showResult && isCorrect && (
                    <CheckCircle2 className="h-5 w-5 text-card-green ml-auto" />
                  )}
                  {showResult && isSelected && !isCorrect && (
                    <XCircle className="h-5 w-5 text-card-red ml-auto" />
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {/* Explanation */}
        {showResult && (
          <div className={`mt-6 p-4 rounded-lg ${
            selectedAnswer === questions[currentQuestion].correctAnswer
              ? "bg-card-green/10 border border-card-green/30"
              : "bg-card-red/10 border border-card-red/30"
          }`}>
            <p className={`font-semibold mb-2 ${
              selectedAnswer === questions[currentQuestion].correctAnswer
                ? "text-card-green"
                : "text-card-red"
            }`}>
              {selectedAnswer === questions[currentQuestion].correctAnswer ? "Benar!" : "Kurang Tepat"}
            </p>
            <p className="text-muted-foreground text-sm">
              {questions[currentQuestion].explanation}
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Sebelumnya
        </Button>

        <div className="flex gap-2">
          {!showResult ? (
            <Button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Jawab
            </Button>
          ) : isLastQuestion ? (
            allAnswered ? (
              <Button
                onClick={handleReset}
                className="bg-card-green text-white hover:bg-card-green/90"
              >
                Ulangi Latihan
              </Button>
            ) : (
              <Button
                onClick={handleReset}
                variant="outline"
              >
                Ulangi
              </Button>
            )
          ) : (
            <Button
              onClick={handleNext}
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
            >
              Selanjutnya
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Final Score */}
      {allAnswered && (
        <div className="mt-8 bg-primary text-primary-foreground rounded-xl p-6 lg:p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Latihan Selesai!</h3>
          <p className="text-4xl font-bold mb-4">{score}/{questions.length}</p>
          <p className="opacity-90">
            {score === questions.length
              ? "Luar biasa! Kamu menguasai materi ini dengan sempurna!"
              : score >= questions.length * 0.7
              ? "Bagus! Kamu sudah memahami sebagian besar materi."
              : "Terus berlatih! Coba pelajari lagi materinya dan ulangi latihan ini."}
          </p>
        </div>
      )}
    </div>
  )
}
