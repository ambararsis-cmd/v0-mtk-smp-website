"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BookOpen, PlayCircle, PenLine, ChevronRight, ChevronLeft, CheckCircle2, XCircle } from "lucide-react"

type TabType = "materi" | "video" | "latihan"

export default function PersamaanKuadratPage() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<TabType>("materi")

  useEffect(() => {
    const tab = searchParams.get("tab")
    if (tab === "materi" || tab === "video" || tab === "latihan") {
      setActiveTab(tab)
    }
  }, [searchParams])

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-500 to-red-600 py-8 text-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-red-100 mb-2">
              <a href="/" className="hover:text-white">Beranda</a>
              <ChevronRight className="h-4 w-4" />
              <span>Persamaan Kuadrat</span>
            </div>
            <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              PERSAMAAN KUADRAT
            </h1>
            <p className="mt-2 text-red-100">(Kelas 9)</p>
            <p className="mt-4 max-w-2xl text-red-50">
              Akar-akar Persamaan, Rumus ABC, Grafik Fungsi Kuadrat.
            </p>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex gap-1">
              <button
                onClick={() => setActiveTab("materi")}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                  activeTab === "materi"
                    ? "border-b-2 border-red-500 text-red-600"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <BookOpen className="h-5 w-5" />
                Materi
              </button>
              <button
                onClick={() => setActiveTab("video")}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                  activeTab === "video"
                    ? "border-b-2 border-red-500 text-red-600"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <PlayCircle className="h-5 w-5" />
                Video
              </button>
              <button
                onClick={() => setActiveTab("latihan")}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                  activeTab === "latihan"
                    ? "border-b-2 border-red-500 text-red-600"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <PenLine className="h-5 w-5" />
                Latihan
              </button>
            </div>
          </div>
        </section>

        {/* Tab Content */}
        <section className="py-8 lg:py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            {activeTab === "materi" && <MateriContent />}
            {activeTab === "video" && <VideoContent />}
            {activeTab === "latihan" && <LatihanContent />}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function MateriContent() {
  const [currentSection, setCurrentSection] = useState(0)
  
  const sections = [
    {
      title: "Pengertian Persamaan Kuadrat",
      content: (
        <div className="space-y-6">
          <div className="rounded-xl bg-red-50 p-6">
            <h4 className="font-semibold text-red-800 mb-3">Definisi</h4>
            <p className="text-red-700">
              <strong>Persamaan Kuadrat</strong> adalah persamaan yang memiliki variabel dengan pangkat tertinggi 2.
              Bentuk umum persamaan kuadrat adalah:
            </p>
            <div className="mt-4 rounded-lg bg-white p-4 text-center">
              <p className="text-2xl font-bold text-red-600">ax² + bx + c = 0</p>
              <p className="mt-2 text-sm text-muted-foreground">dengan a ≠ 0</p>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-border p-4 text-center">
              <div className="text-3xl font-bold text-red-500">a</div>
              <p className="mt-2 text-sm font-medium">Koefisien x²</p>
              <p className="text-xs text-muted-foreground">Tidak boleh nol</p>
            </div>
            <div className="rounded-lg border border-border p-4 text-center">
              <div className="text-3xl font-bold text-orange-500">b</div>
              <p className="mt-2 text-sm font-medium">Koefisien x</p>
              <p className="text-xs text-muted-foreground">Boleh nol</p>
            </div>
            <div className="rounded-lg border border-border p-4 text-center">
              <div className="text-3xl font-bold text-amber-500">c</div>
              <p className="mt-2 text-sm font-medium">Konstanta</p>
              <p className="text-xs text-muted-foreground">Boleh nol</p>
            </div>
          </div>

          <div className="rounded-xl border border-border p-6">
            <h4 className="font-semibold mb-4">Contoh Persamaan Kuadrat:</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-4 rounded-lg bg-muted/50 p-3">
                <span className="font-mono text-lg">x² + 5x + 6 = 0</span>
                <span className="text-sm text-muted-foreground">→ a=1, b=5, c=6</span>
              </div>
              <div className="flex items-center gap-4 rounded-lg bg-muted/50 p-3">
                <span className="font-mono text-lg">2x² - 3x - 5 = 0</span>
                <span className="text-sm text-muted-foreground">→ a=2, b=-3, c=-5</span>
              </div>
              <div className="flex items-center gap-4 rounded-lg bg-muted/50 p-3">
                <span className="font-mono text-lg">x² - 9 = 0</span>
                <span className="text-sm text-muted-foreground">→ a=1, b=0, c=-9</span>
              </div>
              <div className="flex items-center gap-4 rounded-lg bg-muted/50 p-3">
                <span className="font-mono text-lg">3x² + 6x = 0</span>
                <span className="text-sm text-muted-foreground">→ a=3, b=6, c=0</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Akar-akar Persamaan Kuadrat",
      content: (
        <div className="space-y-6">
          <div className="rounded-xl bg-red-50 p-6">
            <h4 className="font-semibold text-red-800 mb-3">Definisi Akar</h4>
            <p className="text-red-700">
              <strong>Akar persamaan kuadrat</strong> adalah nilai x yang memenuhi persamaan kuadrat, 
              sehingga jika disubstitusi akan menghasilkan nilai 0.
            </p>
          </div>
          
          <div className="rounded-xl border border-border p-6">
            <h4 className="font-semibold mb-4">Metode Mencari Akar:</h4>
            <div className="space-y-4">
              <div className="rounded-lg bg-blue-50 p-4">
                <h5 className="font-medium text-blue-800">1. Faktorisasi</h5>
                <p className="text-sm text-blue-700 mt-1">Menguraikan persamaan menjadi perkalian dua faktor</p>
              </div>
              <div className="rounded-lg bg-green-50 p-4">
                <h5 className="font-medium text-green-800">2. Melengkapkan Kuadrat Sempurna</h5>
                <p className="text-sm text-green-700 mt-1">Mengubah bentuk menjadi kuadrat sempurna</p>
              </div>
              <div className="rounded-lg bg-purple-50 p-4">
                <h5 className="font-medium text-purple-800">3. Rumus ABC (Rumus Kuadrat)</h5>
                <p className="text-sm text-purple-700 mt-1">Menggunakan rumus umum untuk semua persamaan kuadrat</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border p-6">
            <h4 className="font-semibold mb-4">Contoh Faktorisasi:</h4>
            <div className="rounded-lg bg-muted/50 p-4">
              <p className="font-medium mb-3">Tentukan akar dari x² + 5x + 6 = 0</p>
              <div className="space-y-2 text-sm">
                <p><strong>Langkah 1:</strong> Cari dua bilangan yang jika dikalikan = 6 dan dijumlah = 5</p>
                <p className="pl-4 text-muted-foreground">2 × 3 = 6 dan 2 + 3 = 5 ✓</p>
                <p><strong>Langkah 2:</strong> Faktorkan</p>
                <p className="pl-4 font-mono">(x + 2)(x + 3) = 0</p>
                <p><strong>Langkah 3:</strong> Cari nilai x</p>
                <p className="pl-4">x + 2 = 0 → <strong>x = -2</strong></p>
                <p className="pl-4">x + 3 = 0 → <strong>x = -3</strong></p>
              </div>
              <div className="mt-4 rounded-lg bg-red-100 p-3 text-center">
                <p className="font-medium text-red-800">Akar-akarnya: x₁ = -2 dan x₂ = -3</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Rumus ABC (Rumus Kuadrat)",
      content: (
        <div className="space-y-6">
          <div className="rounded-xl bg-gradient-to-r from-red-500 to-red-600 p-6 text-white">
            <h4 className="font-semibold mb-3">Rumus ABC</h4>
            <p className="text-red-100 mb-4">
              Rumus untuk mencari akar-akar persamaan kuadrat ax² + bx + c = 0
            </p>
            <div className="rounded-lg bg-white p-4 text-center">
              <p className="text-2xl font-bold text-red-600">x = (-b ± √(b² - 4ac)) / 2a</p>
            </div>
          </div>
          
          <div className="rounded-xl border border-border p-6">
            <h4 className="font-semibold mb-4">Diskriminan (D)</h4>
            <div className="rounded-lg bg-amber-50 p-4 mb-4">
              <p className="text-center font-mono text-xl font-bold text-amber-700">D = b² - 4ac</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-lg bg-green-50 p-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                <div>
                  <p className="font-medium text-green-800">D &gt; 0</p>
                  <p className="text-sm text-green-700">Dua akar real berbeda</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-blue-50 p-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                <div>
                  <p className="font-medium text-blue-800">D = 0</p>
                  <p className="text-sm text-blue-700">Dua akar real sama (kembar)</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-red-50 p-3">
                <XCircle className="h-5 w-5 text-red-600 shrink-0" />
                <div>
                  <p className="font-medium text-red-800">D &lt; 0</p>
                  <p className="text-sm text-red-700">Tidak ada akar real (akar imajiner)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border p-6">
            <h4 className="font-semibold mb-4">Contoh Penggunaan Rumus ABC:</h4>
            <div className="rounded-lg bg-muted/50 p-4">
              <p className="font-medium mb-3">Tentukan akar dari 2x² + 5x - 3 = 0</p>
              <div className="space-y-2 text-sm">
                <p><strong>Diketahui:</strong> a = 2, b = 5, c = -3</p>
                <p><strong>Hitung D:</strong> D = b² - 4ac = 25 - 4(2)(-3) = 25 + 24 = 49</p>
                <p><strong>Karena D = 49 &gt; 0</strong>, ada dua akar real berbeda</p>
                <div className="mt-3 space-y-1">
                  <p><strong>x₁ = (-5 + √49) / (2×2) = (-5 + 7) / 4 = 2/4 = 1/2</strong></p>
                  <p><strong>x₂ = (-5 - √49) / (2×2) = (-5 - 7) / 4 = -12/4 = -3</strong></p>
                </div>
              </div>
              <div className="mt-4 rounded-lg bg-red-100 p-3 text-center">
                <p className="font-medium text-red-800">Akar-akarnya: x₁ = 1/2 dan x₂ = -3</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Sifat Akar-akar Persamaan Kuadrat",
      content: (
        <div className="space-y-6">
          <div className="rounded-xl bg-red-50 p-6">
            <h4 className="font-semibold text-red-800 mb-3">Rumus Vieta</h4>
            <p className="text-red-700 mb-4">
              Jika x₁ dan x₂ adalah akar-akar persamaan ax² + bx + c = 0, maka:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-white p-4 text-center">
                <p className="text-lg font-bold text-red-600">x₁ + x₂ = -b/a</p>
                <p className="text-sm text-muted-foreground mt-1">Jumlah akar-akar</p>
              </div>
              <div className="rounded-lg bg-white p-4 text-center">
                <p className="text-lg font-bold text-red-600">x₁ × x₂ = c/a</p>
                <p className="text-sm text-muted-foreground mt-1">Hasil kali akar-akar</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl border border-border p-6">
            <h4 className="font-semibold mb-4">Contoh Penerapan:</h4>
            <div className="rounded-lg bg-muted/50 p-4">
              <p className="font-medium mb-3">Untuk persamaan x² - 7x + 12 = 0, tentukan jumlah dan hasil kali akar-akarnya</p>
              <div className="space-y-2 text-sm">
                <p><strong>Diketahui:</strong> a = 1, b = -7, c = 12</p>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg bg-blue-50 p-3">
                    <p className="font-medium text-blue-800">Jumlah akar:</p>
                    <p className="text-blue-700">x₁ + x₂ = -(-7)/1 = 7</p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-3">
                    <p className="font-medium text-green-800">Hasil kali akar:</p>
                    <p className="text-green-700">x₁ × x₂ = 12/1 = 12</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-lg bg-amber-50 p-3">
                <p className="text-sm text-amber-800">
                  <strong>Verifikasi:</strong> Akar-akarnya adalah 3 dan 4. 
                  3 + 4 = 7 ✓ dan 3 × 4 = 12 ✓
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border p-6">
            <h4 className="font-semibold mb-4">Menyusun Persamaan Kuadrat Baru</h4>
            <p className="text-muted-foreground mb-4">
              Jika diketahui akar-akarnya adalah x₁ dan x₂, maka persamaan kuadratnya:
            </p>
            <div className="rounded-lg bg-red-100 p-4 text-center mb-4">
              <p className="text-lg font-bold text-red-700">x² - (x₁ + x₂)x + (x₁ × x₂) = 0</p>
            </div>
            <div className="rounded-lg bg-muted/50 p-4">
              <p className="font-medium mb-2">Contoh: Susun persamaan kuadrat yang akar-akarnya 2 dan -5</p>
              <p className="text-sm">Jumlah = 2 + (-5) = -3</p>
              <p className="text-sm">Hasil kali = 2 × (-5) = -10</p>
              <p className="text-sm mt-2"><strong>Persamaan:</strong> x² - (-3)x + (-10) = 0</p>
              <p className="text-sm font-medium text-red-600 mt-1">→ x² + 3x - 10 = 0</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Grafik Fungsi Kuadrat",
      content: (
        <div className="space-y-6">
          <div className="rounded-xl bg-red-50 p-6">
            <h4 className="font-semibold text-red-800 mb-3">Fungsi Kuadrat</h4>
            <p className="text-red-700 mb-4">
              Fungsi kuadrat adalah fungsi dengan bentuk umum:
            </p>
            <div className="rounded-lg bg-white p-4 text-center">
              <p className="text-2xl font-bold text-red-600">f(x) = ax² + bx + c</p>
              <p className="text-sm text-muted-foreground mt-2">Grafiknya berbentuk parabola</p>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-border p-6">
              <h4 className="font-semibold mb-4">Arah Parabola</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-lg bg-green-50 p-3">
                  <div className="text-2xl">⌣</div>
                  <div>
                    <p className="font-medium text-green-800">a &gt; 0</p>
                    <p className="text-sm text-green-700">Parabola terbuka ke atas</p>
                    <p className="text-xs text-green-600">Titik balik = minimum</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-red-50 p-3">
                  <div className="text-2xl">⌢</div>
                  <div>
                    <p className="font-medium text-red-800">a &lt; 0</p>
                    <p className="text-sm text-red-700">Parabola terbuka ke bawah</p>
                    <p className="text-xs text-red-600">Titik balik = maksimum</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl border border-border p-6">
              <h4 className="font-semibold mb-4">Titik Puncak (Vertex)</h4>
              <div className="rounded-lg bg-amber-50 p-4 text-center">
                <p className="font-mono text-lg font-bold text-amber-700">
                  (-b/2a, -D/4a)
                </p>
                <p className="text-sm text-amber-600 mt-2">atau</p>
                <p className="font-mono text-lg font-bold text-amber-700">
                  (-b/2a, f(-b/2a))
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border p-6">
            <h4 className="font-semibold mb-4">Cara Menggambar Grafik:</h4>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white shrink-0">1</span>
                <div>
                  <p className="font-medium">Tentukan arah parabola (lihat nilai a)</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white shrink-0">2</span>
                <div>
                  <p className="font-medium">Tentukan titik potong sumbu Y</p>
                  <p className="text-sm text-muted-foreground">x = 0, maka y = c → Titik (0, c)</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white shrink-0">3</span>
                <div>
                  <p className="font-medium">Tentukan titik potong sumbu X (jika ada)</p>
                  <p className="text-sm text-muted-foreground">y = 0, cari akar-akar persamaan</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white shrink-0">4</span>
                <div>
                  <p className="font-medium">Tentukan titik puncak</p>
                  <p className="text-sm text-muted-foreground">Gunakan rumus vertex</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white shrink-0">5</span>
                <div>
                  <p className="font-medium">Hubungkan titik-titik dengan kurva mulus</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border p-6">
            <h4 className="font-semibold mb-4">Contoh:</h4>
            <div className="rounded-lg bg-muted/50 p-4">
              <p className="font-medium mb-3">Gambarkan grafik f(x) = x² - 4x + 3</p>
              <div className="space-y-2 text-sm">
                <p><strong>a = 1 &gt; 0</strong> → Parabola terbuka ke atas</p>
                <p><strong>Titik potong sumbu Y:</strong> (0, 3)</p>
                <p><strong>Titik potong sumbu X:</strong> x² - 4x + 3 = 0 → (x-1)(x-3) = 0</p>
                <p className="pl-4">Titik: (1, 0) dan (3, 0)</p>
                <p><strong>Titik puncak:</strong> x = -(-4)/(2×1) = 2</p>
                <p className="pl-4">y = 4 - 8 + 3 = -1 → Titik puncak (2, -1)</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="space-y-8">
      {/* Progress */}
      <div className="flex items-center justify-between rounded-xl bg-card p-4 shadow-sm border border-border">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600 font-bold">
            {currentSection + 1}
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Bagian {currentSection + 1} dari {sections.length}</p>
            <p className="font-semibold">{sections[currentSection].title}</p>
          </div>
        </div>
        <div className="hidden sm:flex gap-1">
          {sections.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSection(i)}
              className={`h-2 w-8 rounded-full transition-colors ${
                i === currentSection ? "bg-red-500" : i < currentSection ? "bg-red-300" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="rounded-xl bg-card p-6 shadow-sm border border-border">
        {sections[currentSection].content}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
          disabled={currentSection === 0}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Sebelumnya
        </Button>
        <Button
          onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
          disabled={currentSection === sections.length - 1}
          className="bg-red-500 hover:bg-red-600"
        >
          Selanjutnya
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

function VideoContent() {
  const videos = [
    {
      title: "Pengertian Persamaan Kuadrat",
      duration: "12:30",
      thumbnail: "🔢",
      description: "Memahami bentuk umum dan komponen persamaan kuadrat"
    },
    {
      title: "Mencari Akar dengan Faktorisasi",
      duration: "15:45",
      thumbnail: "✂️",
      description: "Teknik faktorisasi untuk menyelesaikan persamaan kuadrat"
    },
    {
      title: "Rumus ABC (Rumus Kuadrat)",
      duration: "18:20",
      thumbnail: "📐",
      description: "Penggunaan rumus ABC dan diskriminan"
    },
    {
      title: "Sifat Akar-akar Persamaan Kuadrat",
      duration: "14:15",
      thumbnail: "🔗",
      description: "Rumus Vieta: jumlah dan hasil kali akar-akar"
    },
    {
      title: "Grafik Fungsi Kuadrat",
      duration: "20:00",
      thumbnail: "📈",
      description: "Menggambar parabola dan menentukan titik puncak"
    }
  ]

  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-red-50 p-4">
        <p className="text-red-800">
          Tonton video pembelajaran untuk memahami materi dengan lebih baik.
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, index) => (
          <div key={index} className="group cursor-pointer rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-video bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
              <span className="text-6xl">{video.thumbnail}</span>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <PlayCircle className="h-4 w-4 text-red-500" />
                <span className="text-sm text-muted-foreground">{video.duration}</span>
              </div>
              <h3 className="font-semibold group-hover:text-red-600 transition-colors">{video.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function LatihanContent() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [isFinished, setIsFinished] = useState(false)

  const questions = [
    {
      question: "Bentuk umum persamaan kuadrat adalah...",
      options: ["ax + b = 0", "ax² + bx + c = 0", "ax³ + bx² + c = 0", "a + bx + cx² = 0"],
      correct: 1,
      explanation: "Bentuk umum persamaan kuadrat adalah ax² + bx + c = 0 dengan a ≠ 0"
    },
    {
      question: "Nilai koefisien a, b, dan c dari persamaan 3x² - 5x + 2 = 0 adalah...",
      options: ["a=3, b=5, c=2", "a=3, b=-5, c=2", "a=-3, b=5, c=2", "a=3, b=-5, c=-2"],
      correct: 1,
      explanation: "Dari 3x² - 5x + 2 = 0, koefisien x² adalah 3 (a), koefisien x adalah -5 (b), konstanta adalah 2 (c)"
    },
    {
      question: "Akar-akar dari persamaan x² - 5x + 6 = 0 adalah...",
      options: ["2 dan 3", "-2 dan -3", "1 dan 6", "-1 dan -6"],
      correct: 0,
      explanation: "x² - 5x + 6 = 0 → (x-2)(x-3) = 0 → x = 2 atau x = 3"
    },
    {
      question: "Rumus diskriminan persamaan kuadrat adalah...",
      options: ["D = b² + 4ac", "D = b² - 4ac", "D = 4ac - b²", "D = 2b² - ac"],
      correct: 1,
      explanation: "Diskriminan D = b² - 4ac digunakan untuk menentukan jenis akar persamaan kuadrat"
    },
    {
      question: "Jika diskriminan D < 0, maka persamaan kuadrat...",
      options: ["Memiliki 2 akar real berbeda", "Memiliki 2 akar real sama", "Tidak memiliki akar real", "Memiliki 1 akar real"],
      correct: 2,
      explanation: "D < 0 berarti √D tidak real (imajiner), sehingga tidak ada akar real"
    },
    {
      question: "Dengan rumus ABC, akar dari x² - 4x - 5 = 0 adalah...",
      options: ["5 dan -1", "-5 dan 1", "4 dan -1", "-4 dan 1"],
      correct: 0,
      explanation: "D = 16 + 20 = 36. x = (4 ± 6)/2. x₁ = 10/2 = 5, x₂ = -2/2 = -1"
    },
    {
      question: "Jika x₁ dan x₂ adalah akar dari 2x² + 6x - 8 = 0, maka x₁ + x₂ = ...",
      options: ["3", "-3", "4", "-4"],
      correct: 1,
      explanation: "Jumlah akar = -b/a = -6/2 = -3"
    },
    {
      question: "Hasil kali akar-akar persamaan x² - 3x - 10 = 0 adalah...",
      options: ["10", "-10", "3", "-3"],
      correct: 1,
      explanation: "Hasil kali akar = c/a = -10/1 = -10"
    },
    {
      question: "Grafik fungsi f(x) = -x² + 4x - 3 berbentuk parabola yang terbuka ke...",
      options: ["Atas", "Bawah", "Kanan", "Kiri"],
      correct: 1,
      explanation: "Koefisien a = -1 < 0, sehingga parabola terbuka ke bawah"
    },
    {
      question: "Persamaan kuadrat yang akar-akarnya 3 dan -2 adalah...",
      options: ["x² + x - 6 = 0", "x² - x - 6 = 0", "x² + x + 6 = 0", "x² - x + 6 = 0"],
      correct: 1,
      explanation: "Jumlah = 3 + (-2) = 1, Hasil kali = 3 × (-2) = -6. Persamaan: x² - 1x + (-6) = 0 → x² - x - 6 = 0"
    }
  ]

  const handleAnswer = (index: number) => {
    if (showResult) return
    setSelectedAnswer(index)
    setShowResult(true)
    
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = index
    setAnswers(newAnswers)
    
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setIsFinished(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnswers([])
    setIsFinished(false)
  }

  if (isFinished) {
    const percentage = (score / questions.length) * 100
    return (
      <div className="rounded-xl bg-card p-8 shadow-sm border border-border text-center">
        <div className={`mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full ${
          percentage >= 70 ? "bg-green-100" : percentage >= 50 ? "bg-amber-100" : "bg-red-100"
        }`}>
          <span className="text-4xl font-bold" style={{ color: percentage >= 70 ? "#22c55e" : percentage >= 50 ? "#f59e0b" : "#ef4444" }}>
            {score}/{questions.length}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-2">Quiz Selesai!</h3>
        <p className="text-muted-foreground mb-6">
          Kamu menjawab {score} dari {questions.length} soal dengan benar ({percentage}%)
        </p>
        <div className="mb-6">
          {percentage >= 70 ? (
            <p className="text-green-600 font-medium">Excellent! Kamu sudah menguasai materi ini dengan baik!</p>
          ) : percentage >= 50 ? (
            <p className="text-amber-600 font-medium">Bagus! Terus berlatih untuk hasil yang lebih baik.</p>
          ) : (
            <p className="text-red-600 font-medium">Jangan menyerah! Pelajari kembali materinya dan coba lagi.</p>
          )}
        </div>
        <Button onClick={resetQuiz} className="bg-red-500 hover:bg-red-600">
          Ulangi Quiz
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between rounded-xl bg-card p-4 shadow-sm border border-border">
        <span className="text-sm text-muted-foreground">
          Soal {currentQuestion + 1} dari {questions.length}
        </span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-6 rounded-full ${
                i === currentQuestion
                  ? "bg-red-500"
                  : answers[i] !== undefined
                  ? answers[i] === questions[i].correct
                    ? "bg-green-500"
                    : "bg-red-300"
                  : "bg-muted"
              }`}
            />
          ))}
        </div>
        <span className="text-sm font-medium text-red-600">
          Skor: {score}
        </span>
      </div>

      {/* Question */}
      <div className="rounded-xl bg-card p-6 shadow-sm border border-border">
        <h3 className="text-lg font-semibold mb-6">{questions[currentQuestion].question}</h3>
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={showResult}
              className={`w-full rounded-lg border p-4 text-left transition-all ${
                showResult
                  ? index === questions[currentQuestion].correct
                    ? "border-green-500 bg-green-50 text-green-800"
                    : index === selectedAnswer
                    ? "border-red-500 bg-red-50 text-red-800"
                    : "border-border bg-muted/50"
                  : "border-border hover:border-red-300 hover:bg-red-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`flex h-8 w-8 items-center justify-center rounded-full border font-medium ${
                  showResult
                    ? index === questions[currentQuestion].correct
                      ? "border-green-500 bg-green-500 text-white"
                      : index === selectedAnswer
                      ? "border-red-500 bg-red-500 text-white"
                      : "border-border"
                    : "border-border"
                }`}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{option}</span>
                {showResult && index === questions[currentQuestion].correct && (
                  <CheckCircle2 className="ml-auto h-5 w-5 text-green-500" />
                )}
                {showResult && index === selectedAnswer && index !== questions[currentQuestion].correct && (
                  <XCircle className="ml-auto h-5 w-5 text-red-500" />
                )}
              </div>
            </button>
          ))}
        </div>

        {showResult && (
          <div className={`mt-6 rounded-lg p-4 ${
            selectedAnswer === questions[currentQuestion].correct 
              ? "bg-green-50 border border-green-200" 
              : "bg-red-50 border border-red-200"
          }`}>
            <p className={`font-medium ${
              selectedAnswer === questions[currentQuestion].correct ? "text-green-800" : "text-red-800"
            }`}>
              {selectedAnswer === questions[currentQuestion].correct ? "Benar!" : "Kurang tepat!"}
            </p>
            <p className="text-sm mt-1 text-muted-foreground">
              {questions[currentQuestion].explanation}
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      {showResult && (
        <div className="flex justify-end">
          <Button onClick={nextQuestion} className="bg-red-500 hover:bg-red-600">
            {currentQuestion < questions.length - 1 ? (
              <>
                Soal Berikutnya
                <ChevronRight className="ml-2 h-4 w-4" />
              </>
            ) : (
              "Lihat Hasil"
            )}
          </Button>
        </div>
      )}
    </div>
  )
}
