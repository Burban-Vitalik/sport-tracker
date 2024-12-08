"use client";

import { User } from "@prisma/client";
import { useEffect, useState } from "react";

const Page3 = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch("/api/users");
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error("Failed to fetch users");
      }
    }

    getUsers();
  }, []);

  return (
    <div>
      <div>Page 3</div>
      <div>
        {users &&
          users.map((user: User) => (
            <div
              key={user.id}
              style={{
                border: "1px solid #ccc",
                marginBottom: "10px",
                padding: "10px",
              }}
            >
              <h3>
                {user.firstName} {user.lastName}
              </h3>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Age:</strong> {user.age}
              </p>
              <p>
                <strong>Password:</strong> {user.password}
              </p>
              <p>
                <strong>Created At:</strong>{" "}
                {new Date(user.createdAt).toLocaleString()}
              </p>
              <p>
                <strong>Updated At:</strong>{" "}
                {new Date(user.updatedAt).toLocaleString()}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Page3;
