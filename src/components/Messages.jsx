import { auth } from "../firebase/config";

const Messages = ({ data }) => {
  if (auth.currentUser?.uid === data.sender.id) {
    return <p className="msg-user">{data.text}</p>;
  }
  return (
    <div>
      <div>
        <img src={data.sender.photo} />
        <span>{data.sender.name}</span>
      </div>
      <p className="msg-other">{data.text}</p>
    </div>
  );
};

export default Messages;
