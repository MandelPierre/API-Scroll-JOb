package com.scrolljob.service;

import com.scrolljob.entity.Usuario;
import com.scrolljob.dto.UsuarioDTO;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UsuarioService {


    //simulação de banco para teste temporario
    private List<Usuario> lista = new ArrayList<>();
    private Long contadorId = 1L;

    public Usuario criar(UsuarioDTO dto) {
        Usuario usuario = new Usuario(contadorId++, dto.getNome(), dto.getEmail());
        lista.add(usuario);
        return usuario;
    }

    public List<Usuario> listar() {
        return lista;
    }

    public Usuario buscarPorId(Long id) {
        return lista.stream()
                .filter(u -> u.getId().equals(id))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
    }

    public Usuario atualizar(Long id, UsuarioDTO dto) {
        Usuario usuario = buscarPorId(id);
        usuario.setNome(dto.getNome());
        usuario.setEmail(dto.getEmail());
        return usuario;
    }

    public void deletar(Long id) {
        Usuario usuario = buscarPorId(id);
        lista.remove(usuario);
    }
}