import { supabase } from '../lib/supabaseClient'

export async function buscarMeuPerfil() {
  const { data: authData, error: authError } = await supabase.auth.getUser()

  if (authError) {
    return { data: null, error: authError }
  }

  return supabase
    .from('usuarios')
    .select('*')
    .eq('id', authData.user.id)
    .single()
}

export async function atualizarMeuPerfil(perfil) {
  return supabase.rpc('atualizar_meu_perfil', {
    p_nome: perfil.nome,
    p_foto_url: perfil.foto_url ?? null,
    p_descricao: perfil.descricao ?? null,
    p_cidade: perfil.cidade ?? null,
    p_estado: perfil.estado ?? null,
    p_telefone: perfil.telefone ?? null
  })
}