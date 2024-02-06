import { AdminContainer } from "@/layouts/admin-container/admin-container";
import { CreateUserModal } from "./components/create-user-modal";

export const DashboardPage = () => {
  return (
    <AdminContainer>
      <div className="p-4">
        <div className="flex items-center">
          <CreateUserModal />
        </div>
      </div>
    </AdminContainer>
  );
};
