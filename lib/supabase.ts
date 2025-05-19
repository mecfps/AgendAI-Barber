import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { cookies, headers } from "next/headers"

import type { Database } from "@/types/supabase" // se você estiver usando types gerados pelo Supabase

// CLIENT: usado em componentes client-side (useEffect, eventos de botão, etc)
export const createClientSupabaseClient = () => {
  return createBrowserSupabaseClient<Database>()
}

// SERVER COMPONENT: usado em arquivos server-side como layout.tsx, page.tsx
export const createServerSupabaseClient = () => {
  return createServerComponentClient<Database>({
    cookies,
    headers,
  })
}

// SERVER ACTION: usado em server actions ou actions no form do Next.js
export const createActionSupabaseClient = () => {
  return createServerActionClient<Database>({
    cookies,
    headers,
  })
}

// MIDDLEWARE: usado dentro de middleware.ts
export const createMiddlewareSupabaseClient = (ctx: { req: any; res: any }) => {
  return createMiddlewareClient<Database>(ctx)
}
