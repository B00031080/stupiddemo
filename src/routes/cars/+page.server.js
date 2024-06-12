import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("models").select();
  return {
    cars: data ?? [],
  };
}