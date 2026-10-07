import * as z from 'zod';

export const ContactSchema = z.object({
  name: z.string().min(1, 'Can not be less than 1 character'),
  email: z.email('Email is required'),
  projectDetails: z
    .string()
    .min(1, 'Can not be less than 1 character')
    .max(50, 'you have reached maximum input'),
});

export type ContactRequest = z.infer<typeof ContactSchema>;
