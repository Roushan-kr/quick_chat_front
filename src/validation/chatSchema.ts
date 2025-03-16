import { z } from 'zod';

export const createChatSchema = z.object({
	title: z.string().min(3).max(190, "Title must be less than 190 characters"),
	passcode: z.string().min(4).max(20, "Passcode must be less than 20 characters"),
}).required();

export type createChatSchemaType = z.infer<typeof createChatSchema>;
