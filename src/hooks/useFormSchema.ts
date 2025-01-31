import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const useFormSchema = <T extends ZodType<any, any>>(schema: T) => {
  return useForm<z.infer<T>>({
    resolver: zodResolver(schema),
  });
};
