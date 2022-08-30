import { PlayCircle } from "phosphor-react";
import { Logo } from "../components/Logo";

export function Home() {
    return(
        <div className="min-h-screen flex flex-col items-end">
            <div className="w-full max-w-[1500px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[1000px]">
                    <Logo/>
                    <h1 className="mt-20 text-8xl text-[#FEFAF0] font-extrabold leading-[85px] tracking-[-0.03em]">
                        Uma <br /> nova forma <br /> de contratar profissionais
                    </h1>
                    <p className="mt-10 text-2xl text-[#FEFAF0] font-semibold">
                        Conte o que precisa, converse com o <br /> autônomo, contrate e pague tudo em um <br /> único lugar.
                    </p>

                    <div className="flex mb-auto">
                        <a href="" className="mt-20 px-10 py-5 text-4xl flex items-center bg-[#FFD666] text-[#8D734B] rounded-[12px] font-extrabold gap-2 justify-center shadow-lg hover:bg-yellow-200 transition-colors">
                            Começar
                            <PlayCircle size={48} weight="fill"/>
                        </a>
                    </div>
                </div>
                    
                <div className="flex flex-col mb-auto">
                    <a href="" className="text-[#FEFAF0] text-2xl font-extrabold p-3 hover:text-yellow-200 transition-colors">
                        Como Funciona
                    </a>
                </div>

                <div className="flex flex-col mb-auto">
                    <a href="" className="px-10 py-3 text-2xl flex items-center bg-[#FFD666] text-[#8D734B] rounded-[12px] font-extrabold gap-2 justify-center shadow-lg hover:bg-yellow-200 transition-colors">
                        Entrar
                    </a>
                </div>

            </div>

            <img src="src/assets/looking laptop.png" className="mt-52 absolute" alt="" />
        </div>
    )
}