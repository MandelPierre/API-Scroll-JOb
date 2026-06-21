import {useState} from "react"
import {ChevronUp} from "lucide-react"


function FeedUserCard() {
    const [detailUser, setDetailUser] = useState(false)

     function toggleDetailsUser() {
    setDetailUser((prev) => !prev);
  }
  return (
    <section
    className={`w-full transition-all duration-500 ease-in-out ${
        detailUser ? "translate-y-0" : "translate-y-[140px]"
    }`}
    >
      <div>
        <div className="w-full flex justify-center">
            <button
                className="cursor-pointer mb-2 text-xs flex items-center justify-center gap-1.5"
                onClick={toggleDetailsUser}
            >
                {detailUser ? "Ocultar detalhes" : "Ver detalhes"}
                <ChevronUp
                    className={`transition-transform duration-200 ${
                        detailUser ? "rotate-180" : ""
                    }`}
                    size={16}
                />
            </button>
        </div>
        <div className="bg-white/10 rounded-t-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[10px] border border-white/20 overflow-hidden text-white">

            {/* HEADER */}
            <div className="p-4 border-b border-white/10">
            <div className="flex items-center justify-between">

                <div className="flex items-center items-start flex-col">
                <h1 className="text-lg font-semibold">Victor Kling</h1>
                <p className="text-xs text-white/60">Desenvolvedor Front-end</p>
                </div>

                <div className="text-right">
                <p className="text-sm font-semibold text-green-400">R$ 60/h</p>
                <p className="text-[10px] text-white/50">a partir</p>
                </div>

            </div>
            </div>

            {/* BODY */}
            <div className="p-4 space-y-4">

            {/* SERVICES */}
            <div className="flex items-center gap-4">
                <p className="text-xs text-white/60 mb-2">Serviços</p>

                <div className="flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
                {[
                    "Landing pages",
                    "Sistemas web",
                    "APIs REST",
                    "E-commerce",
                    "Painéis admin",
                    "Performance optimization"
                ].map((service) => (
                    <span
                    key={service}
                    className="text-[11px] px-3 py-1 bg-white/10 border border-white/10 rounded-full shrink-0"
                    >
                    {service}
                    </span>
                ))}
                </div>
            </div>

            </div>

            {/* FOOTER */}
            <div className="p-4 border-t border-white/10 flex items-center justify-between">

            <div className="text-xs text-white/50">
                Disponível para projetos remotos
            </div>

            <button className="px-4 py-2 text-sm bg-white text-black rounded-full hover:scale-105 transition">
                Contratar
            </button>

            </div>

        </div>
      </div>
    </section>
  );
}

export default FeedUserCard;