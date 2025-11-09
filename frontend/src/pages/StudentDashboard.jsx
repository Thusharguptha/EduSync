function StudentDashboard() {
  const username = localStorage.getItem("username");
  return <h1>Welcome Student {username}</h1>;
}
export default StudentDashboard;
