import { supabase } from '../lib/supabaseClient'

export async function demonstrarInteresse(profissionalId) {
  return supabase.rpc('demonstrar_interesse', {
    p_profissional_id: profissionalId
  })
}

export async function listarMeusInteresses() {
  return supabase
    .from('interesses')
    .select('*')
    .order('criado_em', { ascending: false })
}

export async function responderInteresse({ interesseId, aceitar }) {
  return supabase.rpc('responder_interesse', {
    p_interesse_id: interesseId,
    p_aceitar: aceitar
  })
}