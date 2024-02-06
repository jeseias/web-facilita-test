import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useOpen } from "@/hooks/use-open";
import { CreateUserForm } from "./create-user-form";

export const CreateUserModal = () => {
  const { setIsOpen, isOpen } = useOpen();

  return (
    <div className="">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add client</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="mb-10">New Client</DialogTitle>
            <CreateUserForm />
          </DialogHeader>
          {/* <ProfileForm /> */}
        </DialogContent>
      </Dialog>
    </div>
  );
};
