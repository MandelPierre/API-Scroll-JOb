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
          <h1 className="text-center">Faça seu login</h1>

          <Input
            className="mt-6"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            className="mt-4"
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button
            onClick={fazerLogin}
            className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg cursor-pointer"
          >
            Fazer login
          </button>
        </div>
      </div>
    </section>
  );
}

export default Login;