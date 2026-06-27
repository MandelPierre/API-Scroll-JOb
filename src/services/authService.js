import { supabase } from '../lib/supabaseClient'

export async function cadastrarUsuario({ nome, email, password, tipoUsuario }) {
  return supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        nome,
        tipo_usuario: tipoUsuario
      }
    }
  })
}

export async function login({ email, password }) {
  return supabase.auth.signInWithPassword({
    email,
    password
  })
}

export async function logout() {
  return supabase.auth.signOut()
}

export async function obterUsuarioLogado() {
  return supabase.auth.getUser()
}

export async function obterSessao() {
  return supabase.auth.getSession()
}