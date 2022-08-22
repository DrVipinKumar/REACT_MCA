function Navbar(props) {
  return (
    <div className="navbar bg-success">
      <div class="container-fluid">
        <h2 style={{ color: "#ffffff" }}>Total Counter: {props.length}</h2>
      </div>
    </div>
  );
}

export default Navbar;
