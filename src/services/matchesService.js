import { supabase } from '../lib/supabaseClient'

export async function listarMeusMatches() {
  return supabase
    .from('matches')
    .select('*')
    .eq('ativo', true)
    .order('criado_em', { ascending: false })
}