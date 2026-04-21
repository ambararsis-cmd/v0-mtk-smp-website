import Image from "next/image"

export function Hero() {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Math Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Ctext x='5' y='20' fill='white' font-size='16' font-family='sans-serif'%3E%2B%3C/text%3E%3Ctext x='35' y='20' fill='white' font-size='16' font-family='sans-serif'%3Ex%3C/text%3E%3Ctext x='5' y='50' fill='white' font-size='16' font-family='sans-serif'%3E%C3%B7%3C/text%3E%3Ctext x='35' y='50' fill='white' font-size='16' font-family='sans-serif'%3E%3D%3C/text%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center justify-between gap-6 sm:gap-8 md:flex-row">
          <div className="text-center text-primary-foreground md:text-left">
            <h1 className="text-xl sm:text-2xl font-bold leading-tight md:text-3xl lg:text-4xl text-balance">
              MENU PEMBELAJARAN <br /> ALJABAR SMP
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base opacity-90 md:text-lg">
              Kuasai Konsep Aljabar dengan Seru dan Mudah!
            </p>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/hero-student.svg"
              alt="Ilustrasi Siswa Belajar"
              width={250}
              height={200}
              className="h-32 sm:h-40 w-auto md:h-48 lg:h-52"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
