import { supabase } from '../lib/supabaseClient'

export async function listarCategorias() {
  return supabase
    .from('categorias')
    .select('*')
    .eq('ativa', true)
    .order('nome')
}