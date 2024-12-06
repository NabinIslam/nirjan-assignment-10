import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white sticky top-0 shadow">
      <nav className="container bg-white">
        <Navbar fluid rounded className="bg-white">
          <Navbar.Brand>
            <Link>VisaMaster</Link>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Add Visa</Dropdown.Item>
              <Dropdown.Item>My Added Visa</Dropdown.Item>
              <Dropdown.Item>My Visa Applications</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="#" active>
              Home
            </Navbar.Link>
            <Navbar.Link href="#">All visas</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    </header>
  );
};

export default Header;
