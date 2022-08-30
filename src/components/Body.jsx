import { PlayCircle } from "phosphor-react";
export function Body(){
    return(
        <div className="mt-24 bg-blur bg-cover bg-no-repeat bg-current">
            <div className="max-w-[1280px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <h1 className="text-8xl font-extrabold">
                    Uma nova forma de contratar profissionais
                </h1>
                <div>
                    <p className="text-xl font-semibold py-10">
                        Conte o que precisa, converse com o autônomo, contrate e pague tudo <br /> em um único lugar.
                    </p>
                </div>

                <a href="" className="text-2xl my-6 mx-auto py-4 w-56 flex items-center justify-center bg-[#FFD666] text-[#8D734B] rounded-[12px] font-extrabold gap-2 shadow-lg hover:bg-yellow-200 transition-colors">
                    Começar
                    <PlayCircle size={32} weight="fill"/>
                </a>
            </div>
        </div>
    )
} 