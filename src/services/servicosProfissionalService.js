import { supabase } from '../lib/supabaseClient'

export async function listarMeusServicos() {
  const { data: authData, error: authError } = await supabase.auth.getUser()

  if (authError) {
    return { data: null, error: authError }
  }

  return supabase
    .from('servicos_profissionais')
    .select(`
      id,
      categoria_id,
      titulo,
      descricao,
      preco_base,
      ativo,
      categorias (
        id,
        nome
      )
    `)
    .eq('profissional_id', authData.user.id)
    .order('criado_em', { ascending: false })
}

export async function cadastrarServico({ categoriaId, titulo, descricao, precoBase }) {
  const { data: authData, error: authError } = await supabase.auth.getUser()

  if (authError) {
    return { data: null, error: authError }
  }

  return supabase
    .from('servicos_profissionais')
    .insert({
      profissional_id: authData.user.id,
      categoria_id: categoriaId,
      titulo,
      descricao,
      preco_base: precoBase ?? null
    })
    .select()
    .single()
}

export async function atualizarServico(servicoId, campos) {
  return supabase
    .from('servicos_profissionais')
    .update({
      titulo: campos.titulo,
      descricao: campos.descricao,
      preco_base: campos.precoBase ?? null,
      ativo: campos.ativo
    })
    .eq('id', servicoId)
    .select()
    .single()
}

export async function removerServico(servicoId) {
  return supabase
    .from('servicos_profissionais')
    .delete()
    .eq('id', servicoId)
}