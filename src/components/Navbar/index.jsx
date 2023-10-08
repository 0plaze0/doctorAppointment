import Dropdown from "react-bootstrap/Dropdown";

function BasicExample({ disease, setDisease }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Disease
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setDisease("ENT")}>ENT</Dropdown.Item>
        <Dropdown.Item onClick={() => setDisease("SKIN")}>SKIN</Dropdown.Item>
        <Dropdown.Item>Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;
