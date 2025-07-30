import { z } from 'zod';

export const calculatorSchema = z.object({
  num1: z.string().min(1, { message: 'First number is required' }),
  num2: z.string().min(1, { message: 'Second number is required' }),
});

export type CalculatorForm = z.infer<typeof calculatorSchema>;
