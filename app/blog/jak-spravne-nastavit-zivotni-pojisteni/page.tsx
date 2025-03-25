"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/once-ui/ui/button"
import { ArrowLeft, Calendar } from "lucide-react"

export default function BlogPostPage() {
  const router = useRouter()

  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <Button variant="ghost" className="mb-4" onClick={() => router.push("/blog")}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Zpět na blog
      </Button>

      <article>
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Jak správně nastavit životní pojištění</h1>
          <div className="flex items-center text-gray-400 text-sm">
            <Calendar className="h-4 w-4 mr-1" />
            <time>15. 3. 2024</time>
          </div>
        </div>

        <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
          <Image
            src="/avatar_fullHD.png?height=400&width=800&text=Životní+pojištění"
            alt="Životní pojištění"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="lead text-xl text-gray-300 mb-6">
            Životní pojištění je důležitým nástrojem finanční ochrany, který může zajistit vás i vaše blízké v případě
            neočekávaných událostí. Správné nastavení životního pojištění však může být složité. V tomto článku vám
            poradím, jak na to.
          </p>

          <h2>Proč je životní pojištění důležité?</h2>
          <p>
            Životní pojištění slouží především k zajištění rodiny v případě úmrtí živitele. Kromě toho může krýt i další
            rizika, jako je invalidita, vážná onemocnění nebo úrazy. V dnešní době, kdy většina rodin má hypotéky a jiné
            finanční závazky, je životní pojištění nezbytnou součástí finančního plánu.
          </p>

          <h2>Jak určit správnou pojistnou částku?</h2>
          <p>Při stanovení pojistné částky je třeba vzít v úvahu několik faktorů:</p>
          <ul>
            <li>Výše vašich finančních závazků (hypotéka, úvěry)</li>
            <li>Měsíční výdaje vaší domácnosti</li>
            <li>Počet a věk závislých osob</li>
            <li>Vaše úspory a investice</li>
            <li>Další příjmy rodiny</li>
          </ul>
          <p>
            Obecně se doporučuje, aby pojistná částka pro případ úmrtí byla minimálně ve výši 3-5násobku ročního příjmu,
            plus výše nesplacených závazků.
          </p>

          <h2>Jaká rizika by mělo životní pojištění krýt?</h2>
          <p>Základní rizika, která by mělo životní pojištění pokrývat:</p>
          <ul>
            <li>
              <strong>Úmrtí</strong> - základní složka životního pojištění
            </li>
            <li>
              <strong>Invalidita</strong> - ideálně všechny stupně invalidity
            </li>
            <li>
              <strong>Vážná onemocnění</strong> - pokrytí léčebných výloh při závažných diagnózách
            </li>
            <li>
              <strong>Trvalé následky úrazu</strong> - отškodnění při trvalém poškození zdraví
            </li>
          </ul>
          <p>
            Další připojištění, jako denní odškodné při úrazu nebo pracovní neschopnosti, jsou vhodná v závislosti na
            vaší konkrétní situaci a potřebách.
          </p>

          <h2>Jak dlouho by mělo pojištění trvat?</h2>
          <p>Životní pojištění by mělo trvat minimálně do doby, kdy:</p>
          <ul>
            <li>Splatíte všechny významné finanční závazky</li>
            <li>Vaše děti budou finančně nezávislé</li>
            <li>Budete mít dostatečné úspory na důchod</li>
          </ul>
          <p>Pro většinu lidí to znamená pojištění do věku 60-65 let.</p>

          <h2>Jak vybrat správnou pojišťovnu?</h2>
          <p>Při výběru pojišťovny je důležité zohlednit:</p>
          <ul>
            <li>Rozsah pojistného krytí a výluky z pojištění</li>
            <li>Cenu pojištění a poměr cena/výkon</li>
            <li>Stabilitu a důvěryhodnost pojišťovny</li>
            <li>Rychlost a způsob likvidace pojistných událostí</li>
            <li>Flexibilitu pojištění a možnost úprav v průběhu trvání smlouvy</li>
          </ul>

          <h2>Závěr</h2>
          <p>
            Správně nastavené životní pojištění je klíčovou součástí finanční ochrany každé rodiny. Nejde o to mít co
            nejlevnější pojištění, ale o to mít pojištění, které vás skutečně ochrání v případě potřeby. Každá životní
            situace je jiná, proto je důležité konzultovat nastavení pojištění s odborníkem, který vám pomůže najít
            optimální řešení.
          </p>

          <div className="bg-[#1a1a2e]/50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4">Potřebujete pomoc s nastavením životního pojištění?</h3>
            <p className="mb-4">
              Jako pojišťovací poradce vám mohu pomoci s výběrem a nastavením životního pojištění přesně podle vašich
              potřeb. Kontaktujte mě pro nezávaznou konzultaci.
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={() => router.push("/kontakt")}>
              Domluvit konzultaci
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}

