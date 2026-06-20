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
        <div>
            
        </div>
      </div>
    </section>
  );
}

export default Login;