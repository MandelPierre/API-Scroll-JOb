import { supabase } from '../lib/supabaseClient'

export async function listarNotificacoes() {
  return supabase
    .from('notificacoes')
    .select('*')
    .order('criado_em', { ascending: false })
}

export async function marcarNotificacaoLida(notificacaoId) {
  return supabase.rpc('marcar_notificacao_lida', {
    p_notificacao_id: notificacaoId
  })
}