import React, { useState, useContext } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form } from "reactstrap";
import { BASE_URL } from "../../utils/config";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const TourHost = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);
    const [credentials, setCredentials] = useState({
      title: "",
      country: "",
      city: "",
      distance: "",
      price: "",
      desc: "",
      photo: "",
      image_one: "",
      image_two: "",
      image_three: "",
      image_four: "",
      image_five: ""
    });
    const handleChange = (e) => {
      setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const handleClick = async (e) => {
      e.preventDefault();
      try {
        const res = await fetch(`${BASE_URL}/tours`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });
        const data = await res.json();
        if (!res.ok) {
          alert(data.message);
        } else {
          dispatch({ type: "UPLOAD_SUCCESS" });
          navigate("/login");
        }
      } catch (err) {
        alert(err.message);
      }
    };
  
    const { user } = useContext(AuthContext);
  

  return (
    <>
    
    <Button className="modal-btn btn-success mt-2" onClick={toggle}>
     Host a Tour
    </Button>
    <div className="modal">

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>tour details</ModalHeader>
        <ModalBody>
          {user ?
            <Form inline onSubmit={handleClick}>
              <Input
                type="text"
                placeholder="Title of the tour"
                id="title"
                onChange={handleChange}
                rows={5}
              />
              <Input
                type="text"
                placeholder="Country in which the propery is located"
                id="country"
                onChange={handleChange}
                rows={5}
              />
              <Input
                type="text"
                placeholder="City of the tour's location"
                id="city"
                onChange={handleChange}
                rows={5}
              />
             
              <Input
                type="number"
                placeholder="price of the tour"
                id="price"
                onChange={handleChange}
                rows={5}
              />
              <Input
                type="number"
                placeholder="Distance of the propery from the city center"
                id="distance"
                onChange={handleChange}
                rows={5}
              />
              
              <Input
                type="text"
                placeholder="Image link of the tour"
                id="photo"
                onChange={handleChange}
                rows={5}
              />
              <Input
                type="text"
                placeholder="Other image of the tour"
                id="image_one"
                onChange={handleChange}
                rows={5}
              />
              <Input
                type="text"
                placeholder="Second image of the tour"
                id="image_two"
                onChange={handleChange}
                rows={5}
              />
              <Input
                type="text"
                placeholder="Third image of the tour"
                id="image_three"
                onChange={handleChange}
                rows={5}
              />
              <Input
                type="text"
                placeholder="Fourth image of the tour"
                id="image_four"
                onChange={handleChange}
                rows={5}
              />
              <Input
                type="text"
                placeholder="Fifth image of the tour"
                id="image_five"
                onChange={handleChange}
                rows={5}
              />

              <Input
                type="textarea"
                placeholder="Description of the tour"
                id="desc"
                onChange={handleChange}
                rows={5}
              />
            </Form>
            : <h3 className="d-flex align-items-center justify-content-between">Sign in first</h3>
          }

        </ModalBody>
        <ModalFooter>
          {user ?
            <Button color="success" onClick={handleClick}>
              Host
            </Button>
            : <Link to="/login">
              <Button color="success">
                Sign in
              </Button>
            </Link>
          }

          {" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
</>
  )
}

export default TourHost