function AdminDashboard() {
  const username = localStorage.getItem("username");
  return <h1>Welcome Admin {username}</h1>;
}
export default AdminDashboard;
