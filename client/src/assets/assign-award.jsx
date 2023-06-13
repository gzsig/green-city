import { useState } from "react";

const initialUsers = [
  { id: 1, name: "Usuário 1" },
  { id: 2, name: "Usuário 2" },
];

function AssignAward() {
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedAward, setSelectedAward] = useState(null);

  return (
    <div>
      <select
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      {/* Aqui você adicionaria um selector para o prêmio a ser atribuído */}
    </div>
  );
}

export default AssignAward;
