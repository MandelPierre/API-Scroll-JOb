import { useState } from "react";
import Input from "../../components/ui/Input/Input";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const fazerLogin = async () => {
    try {
      const resposta = await fetch(
        "http://localhost:8080/usuarios/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            senha,
          }),
        }
      );

    const dados = await resposta.text();
      if(dados.includes("Login efetuado com sucesso!")){
        localStorage.setItem("logado", "true")
        
      }
      console.log("Resposta da API:", dados);
    } catch (erro) {
      console.error("Erro ao fazer login:", erro);
    }
  };

  return (
    <section>
      <div className="max-w-[560px] mx-auto px-5 h-dvh flex items-center">
        <div className="w-full py-8 px-10 border rounded-lg">
          <h1 className="text-center">Quais tipos de serviços você deseja contratar?</h1>
          <div className="mt-6">
            <div className="flex items-center gap-2">
                <label htmlFor="">Serviços domésticos</label>
                <div>
                    <Input type="checkbox" />
                </div>
            </div>
            <div className="flex items-center gap-2">
                <label htmlFor="">Marketing</label>
                <div>
                    <Input type="checkbox" />
                </div>
            </div>
            <div className="flex items-center gap-2">
                <label htmlFor="">Programadores</label>
                <div>
                    <Input type="checkbox" />
                </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <Input type="submit" value="Enviar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;