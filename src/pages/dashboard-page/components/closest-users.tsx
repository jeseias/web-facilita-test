import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useOpen } from "@/hooks/use-open";

export const ClosestUsers = () => {
  const { setIsOpen, isOpen } = useOpen();

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
            {/* <CreateUserForm /> */}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
