// lib/supabase.ts

import { createClient } from "@supabase/supabase-js"
import { supabaseConfig } from "./supabase-config"

// ✅ Cliente para SSR/API/Middleware (server-side)
export const createServerSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY! // Atenção: essa chave deve ser usada apenas no server

  return createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
    },
  })
}

// ✅ Singleton para o cliente do lado do cliente (browser)
let clientSupabaseInstance: ReturnType<typeof createClient> | null = null

export const createClientSupabaseClient = () => {
  if (clientSupabaseInstance) return clientSupabaseInstance

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

  clientSupabaseInstance = createClient(supabaseUrl, supabaseAnonKey, supabaseConfig)
  return clientSupabaseInstance
}

// ✅ Alias compatível com o Supabase Auth Helpers
export const createClientComponentClient = createClientSupabaseClient
