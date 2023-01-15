import { AuthApiError, type Provider } from "@supabase/supabase-js";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
    login: async ({ request, locals, url }) => {
        const body = Object.fromEntries(await request.formData())
        const provider = url.searchParams.get("provider") as Provider;

        if (provider) {
            const { data, error: err } = await locals.sb.auth.signInWithOAuth({
                provider: provider,
            })

            if (err) {
                console.log(err)
                return fail(400, {
                    message: "Something went wrong",
                })
            }
            console.log(data)
            throw redirect(303, data.url)
        } else {
            const { error: err } = await locals.sb.auth.signInWithPassword({
                email: body.email.toString(),
                password: body.password.toString(),
            })

            if (err) {
                if (err instanceof AuthApiError && err.status === 400) {
                    return fail(400, {
                        error: "Invalid Credentials"
                    })
                }
                return fail(500, {
                    error: "Server error. Please try again later."
                })
            }

            throw redirect(303, "/app")
        }
    },
    register: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData())

        const { data, error: err } = await locals.sb.auth.signUp({
            email: body.email.toString(),
            password: body.password.toString(),
        })

        if (err) {
            if (err instanceof AuthApiError && err.status === 400) {
                return fail(400, {
                    error: "Invalid credentials",
                })
            }

            return fail(500, {
                error: "Server error. Please try again error."
            })
        }

        throw redirect(303, "/app")
    }
};
