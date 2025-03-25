"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/once-ui/ui/button"
import { ArrowLeft, Shield, Home, Umbrella } from "lucide-react"

export default function PropertyServicePage() {
  const router = useRouter()

  return (
    <div className="container max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Button variant="ghost" className="mb-4" onClick={() => router.push("/sluzby")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zpět na služby
        </Button>
        <h1 className="text-4xl font-bold mb-4">Pojištění majetku</h1>
        <p className="text-gray-300 text-lg">
          Komplexní řešení pro ochranu vašeho domova, bytu či rekreačního objektu před nečekanými událostmi.
        </p>
      </div>

      <div className="aspect-video relative mb-12 rounded-lg overflow-hidden">
        <Image
          src="/avatar_fullHD.png?height=600&width=1200&text=Pojištění+majetku"
          alt="Pojištění majetku"
          fill
          className="object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-[#1a1a2e]/30 p-6 rounded-lg">
          <Shield className="h-10 w-10 text-red-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Komplexní ochrana</h3>
          <p className="text-gray-300">
            Pojištění nemovitosti a domácnosti v jednom balíčku pro maximální ochranu vašeho majetku.
          </p>
        </div>

        <div className="bg-[#1a1a2e]/30 p-6 rounded-lg">
          <Home className="h-10 w-10 text-red-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Široký rozsah krytí</h3>
          <p className="text-gray-300">
            Ochrana před živelnými pohromami, krádeží, vandalismem i odpovědností za škodu.
          </p>
        </div>

        <div className="bg-[#1a1a2e]/30 p-6 rounded-lg">
          <Umbrella className="h-10 w-10 text-red-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Individuální přístup</h3>
          <p className="text-gray-300">Pojištění přizpůsobené vašim potřebám a hodnotě vašeho majetku.</p>
        </div>
      </div>

      <div className="bg-[#1a1a2e]/30 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-6">Co pojištění majetku zahrnuje?</h2>

        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-red-500/20 p-1 rounded-full mr-3 mt-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Pojištění nemovitosti</h3>
              <p className="text-gray-300">
                Ochrana stavby a všech jejích součástí před živelnými pohromami, krádeží a vandalismem.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-red-500/20 p-1 rounded-full mr-3 mt-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Pojištění domácnosti</h3>
              <p className="text-gray-300">
                Ochrana vybavení a osobních věcí v domácnosti před poškozením, zničením nebo odcizením.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-red-500/20 p-1 rounded-full mr-3 mt-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Pojištění odpovědnosti</h3>
              <p className="text-gray-300">
                Ochrana před finančními následky škod, které způsobíte třetím osobám vy nebo členové vaší domácnosti.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-red-500/20 p-1 rounded-full mr-3 mt-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Asistenční služby</h3>
              <p className="text-gray-300">
                Pomoc v případě havárie nebo poruchy v domácnosti, zajištění řemeslníků a úhrada nákladů na opravu.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Zajímá vás pojištění majetku?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Kontaktujte mě pro nezávaznou konzultaci a vytvoření nabídky na míru vašim potřebám.
        </p>
        <Button
          className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8"
          onClick={() => router.push("/kontakt")}
        >
          Kontaktovat
        </Button>
      </div>
    </div>
  )
}

