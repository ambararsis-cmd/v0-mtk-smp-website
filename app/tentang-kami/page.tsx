import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Target, Eye, BookOpen, Users, GraduationCap, Heart } from "lucide-react"

export default function TentangKamiPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary py-10 sm:py-16 text-white">
          <div className="mx-auto max-w-7xl px-3 sm:px-4 text-center lg:px-8">
            <h1 className="text-2xl sm:text-3xl font-bold md:text-4xl lg:text-5xl">Tentang Kami</h1>
            <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-lg opacity-90">
              Platform pembelajaran matematika interaktif untuk siswa SMP/MTS
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-10 sm:py-16">
          <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
            <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground md:text-3xl">
                  Selamat Datang di MTK SMP/MTS
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  MTK SMP/MTS adalah platform pembelajaran matematika online yang dirancang khusus untuk
                  membantu siswa Sekolah Menengah Pertama dan Madrasah Tsanawiyah dalam memahami konsep-konsep
                  matematika dengan cara yang menyenangkan dan interaktif.
                </p>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Kami percaya bahwa setiap siswa memiliki potensi untuk menguasai matematika. Dengan
                  pendekatan yang tepat dan materi yang disajikan secara menarik, matematika dapat menjadi
                  mata pelajaran yang disukai oleh semua siswa.
                </p>
              </div>
              <div className="flex items-center justify-center order-1 lg:order-2">
                <div className="flex h-40 w-40 sm:h-64 sm:w-64 items-center justify-center rounded-full bg-primary/10">
                  <div className="flex h-28 w-28 sm:h-48 sm:w-48 items-center justify-center rounded-full bg-primary/20">
                    <div className="flex h-20 w-20 sm:h-32 sm:w-32 items-center justify-center rounded-full bg-primary text-4xl sm:text-6xl font-bold text-primary-foreground">
                      π
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="bg-muted py-10 sm:py-16">
          <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
            <div className="grid gap-4 sm:gap-8 md:grid-cols-2">
              {/* Visi */}
              <div className="rounded-xl bg-card p-5 sm:p-8 shadow-sm">
                <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Eye className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">Visi</h3>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Menjadi platform pembelajaran matematika terdepan yang mampu menginspirasi dan membantu
                  setiap siswa SMP/MTS di Indonesia untuk mencapai potensi terbaik mereka dalam memahami
                  dan menguasai matematika.
                </p>
              </div>

              {/* Misi */}
              <div className="rounded-xl bg-card p-5 sm:p-8 shadow-sm">
                <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <Target className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">Misi</h3>
                <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>Menyediakan materi pembelajaran yang berkualitas dan mudah dipahami</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>Mengembangkan metode pembelajaran yang interaktif dan menyenangkan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>Membantu siswa meningkatkan kemampuan berpikir logis dan analitis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-10 sm:py-16">
          <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground md:text-3xl">
                Mengapa Memilih Kami?
              </h2>
              <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">
                Kami menyediakan berbagai fitur untuk mendukung pembelajaran matematika yang efektif
              </p>
            </div>

            <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
              <div className="rounded-xl bg-card p-4 sm:p-6 text-center shadow-sm">
                <div className="mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-card-blue/10">
                  <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-card-blue" />
                </div>
                <h3 className="text-xs sm:text-base font-semibold text-foreground">Materi Lengkap</h3>
                <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-sm text-muted-foreground">
                  Materi pembelajaran sesuai kurikulum terbaru
                </p>
              </div>

              <div className="rounded-xl bg-card p-4 sm:p-6 text-center shadow-sm">
                <div className="mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-card-orange/10">
                  <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-card-orange" />
                </div>
                <h3 className="text-xs sm:text-base font-semibold text-foreground">Video Pembelajaran</h3>
                <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-sm text-muted-foreground">
                  Video penjelasan yang mudah dipahami
                </p>
              </div>

              <div className="rounded-xl bg-card p-4 sm:p-6 text-center shadow-sm">
                <div className="mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-card-green/10">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-card-green" />
                </div>
                <h3 className="text-xs sm:text-base font-semibold text-foreground">Latihan Soal</h3>
                <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-sm text-muted-foreground">
                  Berbagai latihan untuk mengasah kemampuan
                </p>
              </div>

              <div className="rounded-xl bg-card p-4 sm:p-6 text-center shadow-sm">
                <div className="mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-card-red/10">
                  <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-card-red" />
                </div>
                <h3 className="text-xs sm:text-base font-semibold text-foreground">Gratis</h3>
                <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-sm text-muted-foreground">
                  Akses gratis untuk semua siswa
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Developer Section */}
        <section className="bg-muted py-10 sm:py-16">
          <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground md:text-3xl">
                Pengembang
              </h2>
              <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">
                Platform ini dikembangkan oleh
              </p>
            </div>

            <div className="mx-auto mt-8 sm:mt-12 max-w-md">
              <div className="rounded-xl bg-card p-6 sm:p-8 text-center shadow-sm">
                <div className="mx-auto mb-3 sm:mb-4 flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-3xl sm:text-4xl font-bold text-primary">SN</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">Siti Nur Ambar</h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">Mahasiswa UNISDA</p>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground break-all">
                  sitinurambar.2022@mhs.unisda.ac.id
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
