import { createClient } from "@supabase/auth-helpers-sveltekit"

import { PUBLIC_SUPABASE_KEY, PUBLIC_SUPABASE_URL } from "$env/static/public"


export const client = createClient(
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_KEY,
)

client.auth.onAuthStateChange((event, session) => {

})
