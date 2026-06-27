import { supabase } from '../lib/supabaseClient'

export async function buscarProfissionais({ categoriaId = null, cidade = null } = {}) {
  return supabase.rpc('buscar_profissionais', {
    p_categoria_id: categoriaId,
    p_cidade: cidade
  })
}

export async function buscarServicosProfissional(profissionalId) {
  return supabase
    .from('servicos_profissionais')
    .select(`
      id,
      titulo,
      descricao,
      preco_base,
      categorias (
        id,
        nome,
        slug
      )
    `)
    .eq('profissional_id', profissionalId)
    .eq('ativo', true)
}

export async function buscarPortfolioProfissional(profissionalId) {
  return supabase
    .from('portfolio_profissional')
    .select('*')
    .eq('profissional_id', profissionalId)
    .order('ordem')
}