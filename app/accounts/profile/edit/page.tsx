"use client";

import { useRouter } from "next/navigation";

export default function EditProfileModal() {
  const router = useRouter();

  const closeModal = () => {
    router.back(); // Закриває модаль і повертає назад
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Зберігаю дані профілю...");
    closeModal(); // Після збереження закриваємо модаль
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md w-96">
        <h2 className="text-xl mb-4">Редагувати профіль</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Ім’я
            </label>
            <input
              id="name"
              type="text"
              className="border p-2 w-full"
              placeholder="Введіть ім’я"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="border p-2 w-full"
              placeholder="Введіть email"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="mr-2 px-4 py-2 border rounded"
            >
              Закрити
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Зберегти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
