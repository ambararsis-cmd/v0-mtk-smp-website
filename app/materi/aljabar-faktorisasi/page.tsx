"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BookOpen, PlayCircle, PenLine, ChevronRight, ChevronLeft, CheckCircle2, XCircle } from "lucide-react"

type TabType = "materi" | "video" | "latihan"

export default function AljabarFaktorisasiPage() {
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
        <section className="bg-[#4caf50] py-8 lg:py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
              <a href="/" className="hover:text-white">Beranda</a>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">Aljabar & Faktorisasi</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
              Aljabar & Faktorisasi
            </h1>
            <p className="text-white/90 text-lg">Kelas 8 SMP/MTS</p>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="border-b border-border bg-card sticky top-0 z-10">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex gap-1">
              <button
                onClick={() => setActiveTab("materi")}
                className={`flex items-center gap-2 px-4 py-3 font-medium transition-colors border-b-2 ${
                  activeTab === "materi"
                    ? "border-[#4caf50] text-[#4caf50]"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <BookOpen className="h-4 w-4" />
                Materi
              </button>
              <button
                onClick={() => setActiveTab("video")}
                className={`flex items-center gap-2 px-4 py-3 font-medium transition-colors border-b-2 ${
                  activeTab === "video"
                    ? "border-[#4caf50] text-[#4caf50]"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <PlayCircle className="h-4 w-4" />
                Video
              </button>
              <button
                onClick={() => setActiveTab("latihan")}
                className={`flex items-center gap-2 px-4 py-3 font-medium transition-colors border-b-2 ${
                  activeTab === "latihan"
                    ? "border-[#4caf50] text-[#4caf50]"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <PenLine className="h-4 w-4" />
                Latihan
              </button>
            </div>
          </div>
        </section>

        {/* Content */}
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
      title: "Pengertian Pemangkatan",
      content: (
        <div className="space-y-6">
          <div className="rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-6 border border-green-200">
            <h3 className="text-xl font-bold text-green-800 mb-4">Apa itu Pemangkatan?</h3>
            <p className="text-foreground leading-relaxed mb-4">
              <strong>Pemangkatan</strong> adalah perkalian berulang dari suatu bilangan dengan bilangan itu sendiri. 
              Bilangan yang dipangkatkan disebut <strong>basis</strong>, sedangkan banyaknya perkalian disebut <strong>eksponen</strong>.
            </p>
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="text-center text-lg font-medium">
                a<sup>n</sup> = a × a × a × ... × a (sebanyak n kali)
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl bg-card p-6 border border-border">
              <h4 className="font-bold text-green-600 mb-3">Contoh 1</h4>
              <div className="space-y-2 text-foreground">
                <p>2<sup>3</sup> = 2 × 2 × 2 = <strong>8</strong></p>
                <p className="text-sm text-muted-foreground">Basis = 2, Eksponen = 3</p>
              </div>
            </div>
            <div className="rounded-xl bg-card p-6 border border-border">
              <h4 className="font-bold text-green-600 mb-3">Contoh 2</h4>
              <div className="space-y-2 text-foreground">
                <p>5<sup>4</sup> = 5 × 5 × 5 × 5 = <strong>625</strong></p>
                <p className="text-sm text-muted-foreground">Basis = 5, Eksponen = 4</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-amber-50 p-6 border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-3">Sifat-sifat Pemangkatan</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 border border-amber-200">
                  <p className="font-medium">1. a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup></p>
                  <p className="text-sm text-muted-foreground mt-1">Contoh: 2<sup>3</sup> × 2<sup>2</sup> = 2<sup>5</sup> = 32</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-amber-200">
                  <p className="font-medium">2. a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m-n</sup></p>
                  <p className="text-sm text-muted-foreground mt-1">Contoh: 3<sup>5</sup> ÷ 3<sup>2</sup> = 3<sup>3</sup> = 27</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-amber-200">
                  <p className="font-medium">3. (a<sup>m</sup>)<sup>n</sup> = a<sup>m×n</sup></p>
                  <p className="text-sm text-muted-foreground mt-1">Contoh: (2<sup>3</sup>)<sup>2</sup> = 2<sup>6</sup> = 64</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 border border-amber-200">
                  <p className="font-medium">4. (a × b)<sup>n</sup> = a<sup>n</sup> × b<sup>n</sup></p>
                  <p className="text-sm text-muted-foreground mt-1">Contoh: (2 × 3)<sup>2</sup> = 4 × 9 = 36</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-amber-200">
                  <p className="font-medium">5. a<sup>0</sup> = 1 (a ≠ 0)</p>
                  <p className="text-sm text-muted-foreground mt-1">Contoh: 5<sup>0</sup> = 1</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-amber-200">
                  <p className="font-medium">6. a<sup>-n</sup> = 1/a<sup>n</sup></p>
                  <p className="text-sm text-muted-foreground mt-1">Contoh: 2<sup>-3</sup> = 1/8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Pemangkatan Bentuk Aljabar",
      content: (
        <div className="space-y-6">
          <div className="rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-6 border border-green-200">
            <h3 className="text-xl font-bold text-green-800 mb-4">Pemangkatan Bentuk Aljabar</h3>
            <p className="text-foreground leading-relaxed mb-4">
              Pemangkatan bentuk aljabar mengikuti aturan yang sama dengan bilangan biasa, 
              namun melibatkan variabel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl bg-card p-6 border border-border">
              <h4 className="font-bold text-green-600 mb-3">Pemangkatan Suku Tunggal</h4>
              <div className="space-y-3 text-foreground">
                <p>(2x)<sup>3</sup> = 2<sup>3</sup> × x<sup>3</sup> = <strong>8x<sup>3</sup></strong></p>
                <p>(3ab)<sup>2</sup> = 9a<sup>2</sup>b<sup>2</sup></p>
                <p>(x<sup>2</sup>y)<sup>3</sup> = x<sup>6</sup>y<sup>3</sup></p>
              </div>
            </div>
            <div className="rounded-xl bg-card p-6 border border-border">
              <h4 className="font-bold text-green-600 mb-3">Pemangkatan Suku Dua</h4>
              <div className="space-y-3 text-foreground">
                <p>(a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup></p>
                <p>(a - b)<sup>2</sup> = a<sup>2</sup> - 2ab + b<sup>2</sup></p>
                <p className="text-sm text-muted-foreground">Rumus kuadrat sempurna</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-blue-50 p-6 border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-4">Contoh Penerapan</h4>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="font-medium mb-2">Sederhanakan: (2x + 3)<sup>2</sup></p>
                <div className="space-y-1 text-foreground">
                  <p>= (2x)<sup>2</sup> + 2(2x)(3) + 3<sup>2</sup></p>
                  <p>= 4x<sup>2</sup> + 12x + 9</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="font-medium mb-2">Sederhanakan: (3a - 2b)<sup>2</sup></p>
                <div className="space-y-1 text-foreground">
                  <p>= (3a)<sup>2</sup> - 2(3a)(2b) + (2b)<sup>2</sup></p>
                  <p>= 9a<sup>2</sup> - 12ab + 4b<sup>2</sup></p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-purple-50 p-6 border border-purple-200">
            <h4 className="font-bold text-purple-800 mb-3">Selisih Dua Kuadrat</h4>
            <div className="bg-white rounded-lg p-4 border border-purple-200 mb-3">
              <p className="text-center text-lg font-medium">
                (a + b)(a - b) = a<sup>2</sup> - b<sup>2</sup>
              </p>
            </div>
            <p className="text-foreground">
              Contoh: (x + 5)(x - 5) = x<sup>2</sup> - 25
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Pembagian Bentuk Aljabar",
      content: (
        <div className="space-y-6">
          <div className="rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-6 border border-green-200">
            <h3 className="text-xl font-bold text-green-800 mb-4">Pembagian Bentuk Aljabar</h3>
            <p className="text-foreground leading-relaxed">
              Pembagian bentuk aljabar dilakukan dengan membagi koefisien dan mengurangkan eksponen variabel yang sama.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl bg-card p-6 border border-border">
              <h4 className="font-bold text-green-600 mb-3">Pembagian Suku Tunggal</h4>
              <div className="space-y-3 text-foreground">
                <div className="bg-muted rounded-lg p-3">
                  <p>12x<sup>5</sup> ÷ 4x<sup>2</sup> = <strong>3x<sup>3</sup></strong></p>
                  <p className="text-sm text-muted-foreground">12÷4=3, x<sup>5-2</sup>=x<sup>3</sup></p>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <p>18a<sup>3</sup>b<sup>2</sup> ÷ 6ab = <strong>3a<sup>2</sup>b</strong></p>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-card p-6 border border-border">
              <h4 className="font-bold text-green-600 mb-3">Pembagian Suku Banyak</h4>
              <div className="space-y-2 text-foreground text-sm">
                <p>Untuk membagi suku banyak dengan suku tunggal:</p>
                <p className="font-medium">Bagi setiap suku dengan pembagi</p>
                <div className="bg-muted rounded-lg p-3">
                  <p>(6x<sup>2</sup> + 9x) ÷ 3x</p>
                  <p>= 6x<sup>2</sup>/3x + 9x/3x</p>
                  <p>= <strong>2x + 3</strong></p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-amber-50 p-6 border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-4">Pembagian Bersusun (Polinomial)</h4>
            <p className="text-foreground mb-4">
              Untuk membagi suku banyak dengan suku banyak lainnya, gunakan metode pembagian bersusun.
            </p>
            <div className="bg-white rounded-lg p-4 border border-amber-200">
              <p className="font-medium mb-2">Contoh: (x<sup>2</sup> + 5x + 6) ÷ (x + 2)</p>
              <div className="space-y-2 text-foreground">
                <p>Langkah 1: x<sup>2</sup> ÷ x = x</p>
                <p>Langkah 2: x × (x + 2) = x<sup>2</sup> + 2x</p>
                <p>Langkah 3: (x<sup>2</sup> + 5x) - (x<sup>2</sup> + 2x) = 3x</p>
                <p>Langkah 4: 3x ÷ x = 3</p>
                <p>Langkah 5: 3 × (x + 2) = 3x + 6</p>
                <p>Langkah 6: (3x + 6) - (3x + 6) = 0</p>
                <p className="font-bold mt-2">Hasil: x + 3</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Faktorisasi Aljabar",
      content: (
        <div className="space-y-6">
          <div className="rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-6 border border-green-200">
            <h3 className="text-xl font-bold text-green-800 mb-4">Pengertian Faktorisasi</h3>
            <p className="text-foreground leading-relaxed">
              <strong>Faktorisasi</strong> adalah proses mengubah bentuk penjumlahan/pengurangan menjadi bentuk perkalian. 
              Faktorisasi merupakan kebalikan dari perkalian bentuk aljabar.
            </p>
          </div>

          <div className="rounded-xl bg-card p-6 border border-border">
            <h4 className="font-bold text-green-600 mb-4">1. Faktor Persekutuan (FPB)</h4>
            <p className="text-foreground mb-4">
              Cari faktor yang sama dari setiap suku, lalu keluarkan sebagai faktor.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted rounded-lg p-4">
                <p className="font-medium">6x + 9 = <strong>3(2x + 3)</strong></p>
                <p className="text-sm text-muted-foreground">FPB = 3</p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <p className="font-medium">4x<sup>2</sup> + 8x = <strong>4x(x + 2)</strong></p>
                <p className="text-sm text-muted-foreground">FPB = 4x</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-card p-6 border border-border">
            <h4 className="font-bold text-green-600 mb-4">2. Selisih Dua Kuadrat</h4>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 mb-4">
              <p className="text-center text-lg font-medium">
                a<sup>2</sup> - b<sup>2</sup> = (a + b)(a - b)
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted rounded-lg p-4">
                <p className="font-medium">x<sup>2</sup> - 16 = <strong>(x + 4)(x - 4)</strong></p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <p className="font-medium">9a<sup>2</sup> - 25 = <strong>(3a + 5)(3a - 5)</strong></p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-card p-6 border border-border">
            <h4 className="font-bold text-green-600 mb-4">3. Trinomial Kuadrat Sempurna</h4>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200 mb-4">
              <p className="text-center font-medium">
                a<sup>2</sup> + 2ab + b<sup>2</sup> = (a + b)<sup>2</sup>
              </p>
              <p className="text-center font-medium mt-2">
                a<sup>2</sup> - 2ab + b<sup>2</sup> = (a - b)<sup>2</sup>
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted rounded-lg p-4">
                <p className="font-medium">x<sup>2</sup> + 6x + 9 = <strong>(x + 3)<sup>2</sup></strong></p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <p className="font-medium">x<sup>2</sup> - 10x + 25 = <strong>(x - 5)<sup>2</sup></strong></p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Faktorisasi Trinomial ax² + bx + c",
      content: (
        <div className="space-y-6">
          <div className="rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-6 border border-green-200">
            <h3 className="text-xl font-bold text-green-800 mb-4">Faktorisasi Trinomial</h3>
            <p className="text-foreground leading-relaxed">
              Faktorisasi bentuk ax<sup>2</sup> + bx + c menjadi perkalian dua suku.
            </p>
          </div>

          <div className="rounded-xl bg-card p-6 border border-border">
            <h4 className="font-bold text-green-600 mb-4">Jika a = 1: x² + bx + c</h4>
            <p className="text-foreground mb-4">
              Cari dua bilangan yang jika dikalikan hasilnya = c dan jika dijumlahkan hasilnya = b.
            </p>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 mb-4">
              <p className="font-medium mb-2">Contoh: x<sup>2</sup> + 7x + 12</p>
              <div className="space-y-1 text-foreground">
                <p>Cari dua bilangan: hasil kali = 12, hasil jumlah = 7</p>
                <p>Bilangan tersebut adalah 3 dan 4</p>
                <p className="font-bold">x<sup>2</sup> + 7x + 12 = (x + 3)(x + 4)</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted rounded-lg p-4">
                <p className="font-medium">x<sup>2</sup> + 5x + 6 = <strong>(x + 2)(x + 3)</strong></p>
                <p className="text-sm text-muted-foreground">2 × 3 = 6, 2 + 3 = 5</p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <p className="font-medium">x<sup>2</sup> - 3x - 10 = <strong>(x - 5)(x + 2)</strong></p>
                <p className="text-sm text-muted-foreground">-5 × 2 = -10, -5 + 2 = -3</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-card p-6 border border-border">
            <h4 className="font-bold text-green-600 mb-4">Jika a ≠ 1: ax² + bx + c</h4>
            <p className="text-foreground mb-4">
              Cari dua bilangan yang hasil kalinya = a × c dan hasil jumlahnya = b.
            </p>
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <p className="font-medium mb-2">Contoh: 2x<sup>2</sup> + 7x + 3</p>
              <div className="space-y-1 text-foreground">
                <p>a × c = 2 × 3 = 6, b = 7</p>
                <p>Bilangan: 6 dan 1 (6 × 1 = 6, 6 + 1 = 7)</p>
                <p>2x<sup>2</sup> + 6x + x + 3</p>
                <p>= 2x(x + 3) + 1(x + 3)</p>
                <p className="font-bold">= (2x + 1)(x + 3)</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-purple-50 p-6 border border-purple-200">
            <h4 className="font-bold text-purple-800 mb-3">Tips Mengingat</h4>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>Selalu periksa apakah ada faktor persekutuan terlebih dahulu</li>
              <li>Perhatikan tanda koefisien untuk menentukan tanda faktor</li>
              <li>Verifikasi dengan mengalikan kembali hasil faktorisasi</li>
            </ul>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between rounded-xl bg-card p-4 border border-border">
        <span className="text-sm text-muted-foreground">
          Bagian {currentSection + 1} dari {sections.length}
        </span>
        <div className="flex gap-1">
          {sections.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSection(idx)}
              className={`h-2 w-8 rounded-full transition-colors ${
                idx === currentSection ? "bg-[#4caf50]" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Current Section */}
      <div className="rounded-xl bg-card p-6 lg:p-8 border border-border">
        <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-6">
          {sections[currentSection].title}
        </h2>
        {sections[currentSection].content}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
          disabled={currentSection === 0}
          className="gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Sebelumnya
        </Button>
        <Button
          onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
          disabled={currentSection === sections.length - 1}
          className="gap-2 bg-[#4caf50] hover:bg-[#43a047] text-white"
        >
          Selanjutnya
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

function VideoContent() {
  const videos = [
    {
      id: 1,
      title: "Pemangkatan dan Sifat-sifatnya",
      duration: "12:45",
      thumbnail: "Belajar sifat-sifat pemangkatan dengan contoh mudah",
    },
    {
      id: 2,
      title: "Pemangkatan Bentuk Aljabar",
      duration: "14:20",
      thumbnail: "Kuadrat sempurna dan selisih dua kuadrat",
    },
    {
      id: 3,
      title: "Pembagian Bentuk Aljabar",
      duration: "11:30",
      thumbnail: "Teknik pembagian suku tunggal dan suku banyak",
    },
    {
      id: 4,
      title: "Faktorisasi dengan FPB",
      duration: "10:15",
      thumbnail: "Memfaktorkan dengan faktor persekutuan",
    },
    {
      id: 5,
      title: "Faktorisasi Trinomial ax² + bx + c",
      duration: "16:40",
      thumbnail: "Langkah-langkah memfaktorkan trinomial",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-6 border border-green-200">
        <h2 className="text-xl font-bold text-green-800 mb-2">Video Tutorial</h2>
        <p className="text-foreground">
          Tonton video pembelajaran untuk memahami materi dengan lebih baik.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <div
            key={video.id}
            className="group rounded-xl bg-card border border-border overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="aspect-video bg-gradient-to-br from-green-400 to-emerald-600 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <PlayCircle className="h-16 w-16 text-white relative z-10 group-hover:scale-110 transition-transform" />
              <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-foreground mb-1">{video.title}</h3>
              <p className="text-sm text-muted-foreground">{video.thumbnail}</p>
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
  const [quizFinished, setQuizFinished] = useState(false)

  const questions = [
    {
      question: "Hasil dari 2⁴ adalah...",
      options: ["8", "16", "32", "64"],
      correct: 1,
      explanation: "2⁴ = 2 × 2 × 2 × 2 = 16",
    },
    {
      question: "Sederhanakan: x³ × x⁵ = ...",
      options: ["x²", "x⁸", "x¹⁵", "2x⁸"],
      correct: 1,
      explanation: "x³ × x⁵ = x³⁺⁵ = x⁸ (eksponen dijumlahkan)",
    },
    {
      question: "Hasil dari (2x)³ adalah...",
      options: ["2x³", "6x³", "8x³", "8x"],
      correct: 2,
      explanation: "(2x)³ = 2³ × x³ = 8x³",
    },
    {
      question: "Bentuk sederhana dari a⁶ ÷ a² adalah...",
      options: ["a³", "a⁴", "a⁸", "a¹²"],
      correct: 1,
      explanation: "a⁶ ÷ a² = a⁶⁻² = a⁴",
    },
    {
      question: "(x + 3)² = ...",
      options: ["x² + 9", "x² + 3x + 9", "x² + 6x + 9", "x² + 6x + 3"],
      correct: 2,
      explanation: "(x + 3)² = x² + 2(x)(3) + 3² = x² + 6x + 9",
    },
    {
      question: "Faktorisasi dari x² - 25 adalah...",
      options: ["(x - 5)²", "(x + 5)²", "(x + 5)(x - 5)", "(x - 25)(x + 1)"],
      correct: 2,
      explanation: "x² - 25 = x² - 5² = (x + 5)(x - 5) (selisih dua kuadrat)",
    },
    {
      question: "Faktorisasi dari 6x + 12 adalah...",
      options: ["2(3x + 6)", "3(2x + 4)", "6(x + 2)", "6x + 12"],
      correct: 2,
      explanation: "FPB dari 6x dan 12 adalah 6, sehingga 6x + 12 = 6(x + 2)",
    },
    {
      question: "Hasil dari (12x⁴y²) ÷ (4x²y) adalah...",
      options: ["3x²y", "3xy", "8x²y", "3x⁶y³"],
      correct: 0,
      explanation: "12÷4=3, x⁴÷x²=x², y²÷y=y, jadi hasilnya 3x²y",
    },
    {
      question: "Faktorisasi dari x² + 5x + 6 adalah...",
      options: ["(x + 1)(x + 6)", "(x + 2)(x + 3)", "(x + 5)(x + 1)", "(x - 2)(x - 3)"],
      correct: 1,
      explanation: "Cari dua bilangan: 2 × 3 = 6, 2 + 3 = 5. Jadi x² + 5x + 6 = (x + 2)(x + 3)",
    },
    {
      question: "Nilai dari 5⁰ adalah...",
      options: ["0", "1", "5", "Tidak terdefinisi"],
      correct: 1,
      explanation: "Setiap bilangan (kecuali 0) berpangkat 0 hasilnya 1. Jadi 5⁰ = 1",
    },
  ]

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return
    setSelectedAnswer(answerIndex)
    setShowResult(true)

    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answerIndex
    setAnswers(newAnswers)

    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizFinished(true)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnswers([])
    setQuizFinished(false)
  }

  if (quizFinished) {
    const percentage = Math.round((score / questions.length) * 100)
    return (
      <div className="space-y-6">
        <div className="rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-8 border border-green-200 text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Hasil Latihan</h2>
          <div className="text-6xl font-bold text-green-600 mb-2">{percentage}%</div>
          <p className="text-lg text-foreground mb-4">
            Kamu menjawab benar {score} dari {questions.length} soal
          </p>
          {percentage >= 80 ? (
            <p className="text-green-600 font-medium">Luar biasa! Kamu sudah menguasai materi ini!</p>
          ) : percentage >= 60 ? (
            <p className="text-amber-600 font-medium">Bagus! Terus berlatih untuk hasil lebih baik.</p>
          ) : (
            <p className="text-red-600 font-medium">Jangan menyerah! Pelajari lagi materinya.</p>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-foreground">Pembahasan:</h3>
          {questions.map((q, idx) => (
            <div key={idx} className="rounded-lg bg-card p-4 border border-border">
              <div className="flex items-start gap-3">
                {answers[idx] === q.correct ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                )}
                <div>
                  <p className="font-medium text-foreground">{idx + 1}. {q.question}</p>
                  <p className="text-sm text-muted-foreground mt-1">{q.explanation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button onClick={restartQuiz} className="bg-[#4caf50] hover:bg-[#43a047] text-white">
            Ulangi Latihan
          </Button>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between rounded-xl bg-card p-4 border border-border">
        <span className="text-sm text-muted-foreground">
          Soal {currentQuestion + 1} dari {questions.length}
        </span>
        <span className="text-sm font-medium text-green-600">Skor: {score}</span>
      </div>

      {/* Question */}
      <div className="rounded-xl bg-card p-6 lg:p-8 border border-border">
        <h2 className="text-lg lg:text-xl font-bold text-foreground mb-6">
          {question.question}
        </h2>

        <div className="space-y-3">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              disabled={showResult}
              className={`w-full text-left p-4 rounded-lg border transition-all ${
                showResult
                  ? idx === question.correct
                    ? "bg-green-50 border-green-500 text-green-800"
                    : idx === selectedAnswer
                    ? "bg-red-50 border-red-500 text-red-800"
                    : "bg-muted border-border text-muted-foreground"
                  : "bg-card border-border hover:border-[#4caf50] hover:bg-green-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  showResult
                    ? idx === question.correct
                      ? "bg-green-500 text-white"
                      : idx === selectedAnswer
                      ? "bg-red-500 text-white"
                      : "bg-muted text-muted-foreground"
                    : "bg-muted text-foreground"
                }`}>
                  {String.fromCharCode(65 + idx)}
                </span>
                <span>{option}</span>
                {showResult && idx === question.correct && (
                  <CheckCircle2 className="h-5 w-5 text-green-500 ml-auto" />
                )}
                {showResult && idx === selectedAnswer && idx !== question.correct && (
                  <XCircle className="h-5 w-5 text-red-500 ml-auto" />
                )}
              </div>
            </button>
          ))}
        </div>

        {showResult && (
          <div className={`mt-6 p-4 rounded-lg ${
            selectedAnswer === question.correct ? "bg-green-50 border border-green-200" : "bg-amber-50 border border-amber-200"
          }`}>
            <p className="font-medium text-foreground mb-1">Penjelasan:</p>
            <p className="text-muted-foreground">{question.explanation}</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      {showResult && (
        <div className="flex justify-end">
          <Button
            onClick={nextQuestion}
            className="gap-2 bg-[#4caf50] hover:bg-[#43a047] text-white"
          >
            {currentQuestion < questions.length - 1 ? "Soal Berikutnya" : "Lihat Hasil"}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
