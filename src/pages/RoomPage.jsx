import React from "react";

const RoomPage = ({ setIsAuth, setRoom }) => {
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("token");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const room = e.target[0].value.toLowerCase();
    setRoom(room);
  };
  return (
    <form onSubmit={handleSubmit} className="room-form">
      <h1>Chat Odası</h1>
      <p>Hangi Odaya Girmek İstiyorsunuz?</p>

      <input type="text" placeholder="Ör:Haftasonu" required />

      <button>Odaya Gir</button>
      <button onClick={logout}>Çıkış Yap</button>
    </form>
  );
};

export default RoomPage;
