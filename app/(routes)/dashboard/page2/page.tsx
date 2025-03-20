"use client";

import { ConfirmModal } from "@/components/modals/ModalConfirm";

const Page2 = () => {
  const handleDeleteUser = () => {
    alert("User deleted successfully!");
  };

  const confirmationMessage =
    "Are you sure you want to delete this user? Copy the text below to confirm:";
  const requiredEmail = "12345";
  return (
    <div className="page-container">
      <h1 className="text-2xl font-bold mb-4">Page 2</h1>

      <ConfirmModal
        triggerTitle="Delete User"
        dialogTitle="Delete User"
        descriptionText={confirmationMessage}
        confirmBtnText="Delete"
        requiredText={requiredEmail}
        onConfirm={handleDeleteUser}
      />
    </div>
  );
};

export default Page2;
