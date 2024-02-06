import { AdminContainer } from "@/layouts/admin-container/admin-container";
import { CreateUserModal } from "./components/create-user-modal";
import { UsersTable } from "./components/users-table";

export const DashboardPage = () => {
  return (
    <AdminContainer>
      <div className="p-4">
        <div className="flex items-center">
          <CreateUserModal />
        </div>
        <div className="mt-10">
          <UsersTable />
        </div>
      </div>
    </AdminContainer>
  );
};
