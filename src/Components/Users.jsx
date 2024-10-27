import { useState } from "react";


const Users = () => {
  const data = [
    {
      id: 1,
      name: "Adewale Obafemi",
      img: "./img/adewale.jpg" // Update with correct image path
    },
    {
      id: 2,
      name: "Onaneye Joseph",
      img: "./img/onaneye.jpg" // Update with correct image path
    },
    {
      id: 3,
      name: "Feranmi Adesua",
      img: "./img/feranmi.jpg" // Update with correct image path
    },
    {
      id: 4,
      name: "Peter Johnson",
      img: "./img/peter.jpg" // Update with correct image path
    }
  ];

  const [usersData, setUsersData] = useState(data);
  const [fade, setFade] = useState(false);
  
  const shuffle = () => {
    setFade(true);

    setTimeout(() => {
      const shuffled = [...usersData].sort(() => Math.random() - 0.5);
      setUsersData(shuffled);
      setFade(false);
    }, 1000);
  };

  return (
    <main className="w-full flex justify-center items-center my-12">
      <div className="w-[700px] shadow-md rounded-md bg-white py-4 px-3">
        <ul>
          {usersData.map((user) => (
            <li
              key={user.id}
              className={`flex items-center gap-4 p-4 border-b transition-all duration-500 ${fade ? 'fade-out' : ''}`} >
              <div
                className="h-12 w-12 rounded-full bg-blue-500"
                style={{ backgroundImage: `url(${user.img})`, backgroundSize: "cover" }}
              ></div>
              {user.name}
            </li>
          ))}
        </ul>
        <div className="flex justify-center w-full">
          <button
            className="bg-blue-500 px-6 py-4 rounded-md text-white my-6 mx-auto"
            onClick={shuffle}
          >
            Shuffle List
          </button>
        </div>
      </div>
    </main>
  );
};

export default Users;
