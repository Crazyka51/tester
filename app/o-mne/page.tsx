import React from "react";
import Image from "next/image"
import { MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="sticky top-24 space-y-6">
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden bg-[#1a1a2e]">
                <Image
                  src="/avatar_fullHD.png?height=128&width=128&text=MH"
                  alt="Matěj Hrabák"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <nav className="space-y-1">
              <a
                href="#uvod"
                className="block px-3 py-2 text-gray-300 hover:bg-[#1a1a2e]/60 hover:text-white rounded-md"
              >
                Úvod
              </a>

              <div>
                <div className="px-3 py-2 text-gray-300 hover:bg-[#1a1a2e]/60 hover:text-white rounded-md">
                  Pracovní zkušenosti
                </div>
                <div className="pl-4 space-y-1 mt-1">
                  <a href="#generali" className="block px-3 py-1 text-sm text-gray-400 hover:text-white">
                    Generali Česká pojišťovna
                  </a>
                  <a href="#doosan" className="block px-3 py-1 text-sm text-gray-400 hover:text-white">
                    Doosan Bobcat EMEA
                  </a>
                </div>
              </div>

              <div>
                <div className="px-3 py-2 text-gray-300 hover:bg-[#1a1a2e]/60 hover:text-white rounded-md">
                  Vzdělání a certifikace
                </div>
                <div className="pl-4 space-y-1 mt-1">
                  <a href="#skola" className="block px-3 py-1 text-sm text-gray-400 hover:text-white">
                    Integrovaná Střední škola Příbram
                  </a>
                  <a href="#certifikace" className="block px-3 py-1 text-sm text-gray-400 hover:text-white">
                    Zkouška o odborné certifikaci u ČNB - IDD VII
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* Main content */}
        <div className="md:w-3/4">
          <div className="bg-[#1a1a2e]/30 p-6 rounded-lg mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-4xl md:text-5xl font-bold">Matěj Hrabák</h1>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-[#1a1a2e] text-gray-300 rounded-full text-xs">Čeština</span>
                <span className="px-3 py-1 bg-[#1a1a2e] text-gray-300 rounded-full text-xs">English</span>
              </div>
            </div>
            <h2 className="text-xl text-gray-300 mb-4">Pojišťovací poradce a expert</h2>

            <div className="flex items-center text-gray-400 text-sm mb-6">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Europe/Prague</span>
            </div>

            <p className="text-gray-300">
              Je zkušený poradce specializující se na transparentní a na míru šitá pojišťovací řešení. Jeho služby
              zahrnují osobní přístup, profesionální jednání a důraz na ochranu klientova majetku.
            </p>
          </div>

          <section id="pracovni-zkusenosti" className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Pracovní zkušenosti</h2>

            <div id="generali" className="mb-10">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">Generali Česká pojišťovna</h3>
                <span className="text-gray-400">2023 - současnost</span>
              </div>
              <p className="text-red-500 mb-4">Poradce v pojištění a finančních produktů</p>

              <ul className="space-y-4">
                <li key="generali-1" className="flex">
                  <span className="text-red-500 mr-2">•</span>
                  <p className="text-gray-300">
                    Jako poradce v pojištění a finančních produktů v Generali Česká pojišťovna jsem dosáhl významných
                    úspěchů v oblasti klientské spokojenosti a finanční optimalizace. Mým hlavním cílem bylo poskytovat
                    klientům na míru šitá řešení, která odpovídají jejich specifickým potřebám a cílům.
                  </p>
                </li>
                <li key="generali-2" className="flex">
                  <span className="text-red-500 mr-2">•</span>
                  <p className="text-gray-300">
                    Navrhoval jsem efektivní pojistné plány, které pokryly 80 % pojistných smluv, a pomohl jsem klientům
                    dosáhnout významných úspor. Vždy jsem kladl důraz na osobní přístup a profesionální jednání, což
                    vedlo k dlouhodobým a důvěryhodným vztahům s našimi klienty.
                  </p>
                </li>
              </ul>
            </div>

            <div id="doosan">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">Doosan Bobcat EMEA</h3>
                <span className="text-gray-400">2018 - 2023</span>
              </div>
              <p className="text-red-500 mb-4">Koordinátor logistiky výrobního závodu</p>

              <ul className="space-y-4">
                <li key="doosan-1" className="flex">
                  <span className="text-red-500 mr-2">•</span>
                  <p className="text-gray-300">
                    Jako koordinátor logistiky v Doosan Bobcat EMEA jsem dosáhl významných úspěchů v optimalizaci a
                    řízení dodavatelských řetězců. Vedl jsem tým, který zavedl nové logistické strategie, což vedlo k
                    20% snížení nákladů na přepravu a 15% zrychlení vykládek.
                  </p>
                </li>
                <li key="doosan-2" className="flex">
                  <span className="text-red-500 mr-2">•</span>
                  <p className="text-gray-300">
                    Spolupracoval jsem s různými odděleními a externími partnery na vytvoření efektivního systému správy
                    zásob, který minimalizoval skladové zásoby o 25% a zároveň zvýšil dostupnost produktů. Mým hlavním
                    cílem bylo zajistit plynulost a efektivitu logistických procesů, což přispělo k celkovému růstu a
                    úspěchu společnosti.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          <section id="vzdelani">
            <h2 className="text-3xl font-bold mb-8">Vzdělání a certifikace</h2>

            <div id="skola" className="mb-8">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">Integrovaná Střední škola Příbram</h3>
                <span className="text-gray-400">2008 - 2012</span>
              </div>
              <p className="text-gray-300">Obor: Obchodník</p>
            </div>

            <div id="certifikace">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">Zkouška o odborné certifikaci u ČNB - IDD VII</h3>
              </div>
              <p className="text-gray-300">
                Distribuce životního pojištění a distribuce neživotního občanského pojištění (2P + oNŽP)
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

