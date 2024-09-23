import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as apiClient from "../api-client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "./ui/button";

export function LogoutButton() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: apiClient.signOut,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["validateToken"] });
      toast({
        description: "Logged out successfully!",
      });
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        description: error.message,
      });
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };
  return <Button onClick={handleClick}>Sign Out</Button>;
}
