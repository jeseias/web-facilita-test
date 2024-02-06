import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface Props {
  limit: number;
  page: number;
}

interface Response {
  clients: Array<Client.Model>;
  totalElements: 2;
}

const query = async ({ limit, page }: Props) => {
  const response = await api.get<Response>(
    `/clients?limit=${limit}&page=${page}`
  );

  return response.data;
};

export const useApiLoadClients = ({ limit, page }: Props) => {
  return useQuery({
    queryKey: ["clients", limit, page],
    queryFn: () => query({ limit, page }),
  });
};
