import { supabase } from '../lib/supabaseClient'

export async function avaliarUsuario({ matchId, avaliadoId, nota, comentario }) {
  return supabase.rpc('avaliar_usuario', {
    p_match_id: matchId,
    p_avaliado_id: avaliadoId,
    p_nota: nota,
    p_comentario: comentario ?? null
  })
}