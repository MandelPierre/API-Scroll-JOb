package com.scrolljob.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.scrolljob.dto.LoginDTO;
import com.scrolljob.entity.Usuario;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@Service
public class UsuarioService {

    private List<Usuario> carregarUsuarios() {
        try {
            ObjectMapper mapper = new ObjectMapper();
            InputStream arquivo = getClass().getClassLoader()
                    .getResourceAsStream("teste-banco.json");

            JsonNode root = mapper.readTree(arquivo);
            JsonNode usuariosNode = root.get("usuarios");

            List<Usuario> lista = new ArrayList<>();
            for (JsonNode node : usuariosNode) {
                Usuario u = new Usuario();
                u.setId(node.get("id").asLong());
                u.setEmail(node.get("email").asText());
                u.setSenha(node.get("senha").asText());
                lista.add(u);
            }
            return lista;

        } catch (Exception e) {
            throw new RuntimeException("Erro ao ler o arquivo JSON: " + e.getMessage());
        }
    }

    public String login(LoginDTO dto) {
        List<Usuario> usuarios = carregarUsuarios();

        return usuarios.stream()
                .filter(u -> u.getEmail().equals(dto.getEmail()))
                .findFirst()
                .map(u -> {
                    if (u.getSenha().equals(dto.getSenha())) {
                        return "Login efetuado com sucesso! Bem-vindo, " + u.getEmail();
                    } else {
                        return "Senha incorreta.";
                    }
                })
                .orElse("Usuário não encontrado.");
    }
}