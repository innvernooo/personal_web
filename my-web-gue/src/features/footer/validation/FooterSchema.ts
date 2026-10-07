import * as z from "zod";

export const FooterSchema = z.object({
    email: z.email('Email is required')
})

export type FooterRequest = z.infer <typeof FooterSchema>