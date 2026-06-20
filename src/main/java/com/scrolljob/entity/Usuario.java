package com.scrolljob.entity;

public class Usuario {
    
    private long id;
    private String email;
    private String senha;

    public Usuario() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getEmail() { return email; }
    public void setEmail(String nome) { this.email = nome; }
    
    public String getSenha() { return senha; }
    public void setSenha(String senha) {this.senha = senha; } 
}
