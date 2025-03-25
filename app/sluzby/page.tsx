import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Pojištění majetku",
    description: "Komplexní řešení pro ochranu vašeho domova, bytu či rekreačního objektu před nečekanými událostmi.",
    image: "/avatar_fullHD.png?height=300&width=600&text=Pojištění+majetku",
    href: "/sluzby/majetek",
  },
  {
    id: 2,
    title: "Životní pojištění",
    description: "Ochrana vás a vašich blízkých před finančními dopady vážných životních situací.",
    image: "/avatar_fullHD.png?height=300&width=600&text=Životní+pojištění",
    href: "/sluzby/zivotni",
  },
  {
    id: 3,
    title: "Investiční strategie",
    description: "Individuální investiční plány pro zhodnocení vašich financí a zajištění budoucnosti.",
    image: "/avatar_fullHD.png?height=300&width=600&text=Investiční+strategie",
    href: "/sluzby/investice",
  },
  {
    id: 4,
    title: "Penzijní připojištění",
    description: "Dlouhodobé spoření na penzi s výhodami státních příspěvků a daňových úlev.",
    image: "/avatar_fullHD.png?height=300&width=600&text=Penzijní+připojištění",
    href: "/sluzby/penzijni",
  },
  {
    id: 5,
    title: "Pojištění vozidel",
    description: "Povinné ručení a havarijní pojištění pro bezstarostnou jízdu.",
    image: "/avatar_fullHD.png?height=300&width=600&text=Pojištění+vozidel",
    href: "/sluzby/vozidla",
  },
  {
    id: 6,
    title: "Cestovní pojištění",
    description: "Bezpečné cestování po celém světě s komplexním pojistným krytím.",
    image: "/avatar_fullHD.png?height=300&width=600&text=Cestovní+pojištění",
    href: "/sluzby/cestovni",
  },
]

export default function ServicesPage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Služby</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link key={service.id} href={service.href} className="block h-full">
            <div className="bg-[#1a1a2e]/30 rounded-lg overflow-hidden hover:bg-[#1a1a2e]/50 transition-colors h-full flex flex-col">
              <div className="aspect-video relative">
                <Image src={service.image || "/avatar_fullHD.png"} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="flex items-center text-red-500 text-sm font-medium">
                  <span>Zjistit více</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

