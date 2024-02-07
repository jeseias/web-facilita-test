import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useOpen } from "@/hooks/use-open";
import { useApiLoadClosestClients } from "@/services/use-api-load-closest-clients";
import { Loader } from "lucide-react";

export const ClosestUsers = () => {
  const { setIsOpen, isOpen } = useOpen();

  const { isLoading, data } = useApiLoadClosestClients();

  console.log("==>==>==>", data);

  return (
    <div className="">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="ml-2">Closest Clients</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="mb-10">
              Clients to visit by order
            </DialogTitle>
            <div className="flex items-center justify-center h-50">
              {isLoading && (
                <div className="animate-spin">
                  <Loader />
                </div>
              )}
            </div>
            <ol>
              {data?.map((client, index) => (
                <li key={client.id}>
                  <b>{index + 1}.</b>
                  <span className="ml-2">{client.name}</span>
                  <span className="ml-2"> - {client?.distance?.toFixed(2)}m</span>
                </li>
              ))}
            </ol>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
