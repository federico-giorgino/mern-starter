import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RegisterValues } from "@/types";
import * as apiClient from "../api-client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/validations";

export function LoginForm() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<RegisterValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const mutation = useMutation({
    mutationFn: apiClient.login,
    onSuccess: async () => {
      toast({
        description: "Login Success!",
      });
      await queryClient.invalidateQueries({ queryKey: ["validateToken"] });
      navigate("/");
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        description: error.message,
      });
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid gap-6 min-w-[350px]">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <h6 className="text-muted-foreground text-balance">
            Access your existing account
          </h6>
        </div>
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-6 max-w-2xl w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john@doe.com"
                      {...field}
                      className="max-w-3xl w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>

        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="underline text-primary">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
