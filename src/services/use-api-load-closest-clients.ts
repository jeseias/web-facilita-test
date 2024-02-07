import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface Response {
  clients: Array<Client.Model>;
}

const query = async () => {
  const response = await api.get<Response>(`/clients/location`);

  return response.data.clients;
};

export const useApiLoadClosestClients = () => {
  return useQuery({
    queryKey: ["clients", "closest"],
    queryFn: query,
  });
};
