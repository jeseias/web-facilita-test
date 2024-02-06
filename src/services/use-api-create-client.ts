import { useToast } from "@/components/ui/use-toast";
import { api } from "@/lib/axios";
import { queryClient } from "@/lib/query-client";
import { useMutation } from "@tanstack/react-query";

interface Response {
  client: Client.Model;
}

const mutationFn = async (body: Client.CreateClientParams) => {
  const response = await api.post<Response>("/clients", body);
  return response.data;
};

export const useApiCreateClient = () => {
  const { toast } = useToast();

  return useMutation({
    mutationFn,
    onMutate(item) {
      queryClient.setQueryData<Response>(["clients", 10, 1], (old) => {
        return {
          ...old,
          clients: [...old.clients, { ...item, id: old.clients.length + 1 }],
        };
      });
    },
    onSuccess() {
      toast({
        title: "Success",
        description: "New client added",
      });
    },
    onError() {
      toast({
        title: "Error",
        description: "Error while creating client",
      });
    },
  });
};
