import { useState } from "react";

const initialAwards = [
  { id: 1, name: "Prêmio 1", description: "Descrição do prêmio 1" },
  { id: 2, name: "Prêmio 2", description: "Descrição do prêmio 2" },
];

function ManageAwards() {
  const [awards, setAwards] = useState(initialAwards);

  return (
    <div>
      {awards.map((award) => (
        <div key={award.id}>
          <h2>{award.name}</h2>
          <p>{award.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ManageAwards;
