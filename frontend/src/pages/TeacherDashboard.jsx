function TeacherDashboard() {
  const username = localStorage.getItem("username");
  return <h1>Welcome Teacher {username}</h1>;
}
export default TeacherDashboard;
