import "$lib/supabase"
import { getSupabase } from "@supabase/auth-helpers-sveltekit"
import { redirect, type Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {
    const { session, supabaseClient } = await getSupabase(event)

    if (event.url.pathname.startsWith("/app")) {
        if (!session) {
            // not logged in. send to /auth
            throw redirect(303, "/auth")
        }
    }

    event.locals.sb = supabaseClient
    event.locals.session = session;
    return resolve(event)
}
