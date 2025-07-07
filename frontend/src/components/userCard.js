import "../styles/userCard.css";

function UserCard({ user }) {
  const handleConnect = () => {
    alert(`Connect request sent to ${user.name}`);
    // In a real app, you'd call an API to send a connection request.
  };

  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p><strong>College:</strong> {user.collage}</p>
      <p><strong>Skills:</strong> {user.skills?.join(", ")}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
      <button className="connect-btn" onClick={handleConnect}>Connect</button>
    </div>
  );
}

export default UserCard;
