import { Logo2 } from "../components/Logo2";

export function Login() {
    return(
        <div className=" bg-fundo bg-cover bg-no-repeat bg-current w-screen h-screen flex flex-row justify-center items-center ">
            <div className="w-[710px] h-[670px] mx-auto text-center flex flex-col justify-center border-collapse rounded-xl shadow-xl bg-gradient-to-b from-[#15B6D6] to-[#15D6D6] ">

                <div className="block ml-auto mr-auto py-5">
                    <Logo2/>
                </div>
                <h1 className="text-4xl font-extrabold text-white">
                    Boas-vindas de volta!
                </h1>
                <div>
                    <p className="text-xl font-extrabold py-3 text-[rgba(77,111,128,0.75)]">
                        Ficamos muito felizes em poder te ver novamente!
                    </p>
                </div>

                <a href="" className="w-2/3 ml-auto mr-auto text-lg my-2 mx-auto h-14 flex items-center justify-center bg-white text-[rgba(77,111,128,0.75)] rounded-lg font-bold gap-2 shadow-lg hover:bg-sky-200 hover:text-white transition-colors">
                    Continuar com o Google
                </a>
                
                <div class="flex w-2/3 ml-auto mr-auto py-2 items-center">
                    <div class="flex-grow border-t-2 border-white "></div>
                    <span class="flex-shrink mx-4 text-white font-bold">ou</span>
                    <div class="flex-grow border-t-2 border-white"></div>
                </div>

                <form action="" className="flex flex-col gap-5 w-2/3 ml-auto mr-auto  ">
                    <input 
                        className="bg-white rounded-lg px-5 h-14 font-bold text-[rgba(77,111,128,0.75)] shadow-md"
                        type="email" 
                        placeholder="E-mail, CNPJ ou CPF" 
                    />
                    
                    <input 
                        className="bg-white rounded-lg px-5 h-14 font-bold text-[rgba(77,111,128,0.75)] shadow-md"
                        type="senha" 
                        placeholder="Senha" 
                    />
                </form> 

                <div className="ml-[136px] flex">
                    <a href="" className="mt-2 font-extrabold text-[rgba(77,111,128,0.75)]">Esqueceu sua senha?</a>
                </div>
                
                <a href="" className="w-2/3 ml-auto mr-auto text-lg my-6 mx-auto h-14 flex items-center justify-center bg-[#FFD666] text-[#8D734B] rounded-lg font-extrabold gap-2 shadow-lg hover:bg-yellow-200 transition-colors">
                    Entrar
                </a>

                <div>
                    <span className="font-extrabold text-white">Não possui uma conta?</span> <a href="" className="font-extrabold text-[#FFD666]">Cadastrar-se.</a>
                </div>
            </div>
        </div>
    )
}