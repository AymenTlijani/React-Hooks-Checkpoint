
import React  , { useState }from "react";
import {Button, Modal} from 'react-bootstrap';

function Add ({ submitMovies}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [addMovie, setAddMovie] = useState({
      Title: "",
      Type: "",
      Rate: 0,
      Poster: "",
    });
    const changemovie = (e) => {
      setAddMovie({
        ...addMovie,
        [e.target.name]: e.target.value,
      });
    };
  
    return (
      <>
      <Button className="addbutton" variant="primary" onClick={handleShow}><span>
        ADD YOUR MOVIE</span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    
    <input className="form-control" type="text" placeholder="titre..." id="example-text-input" onChange={changemovie}  />
    
   
    <input className="form-control" type="text" placeholder="Type" id="example-search-input" onChange={changemovie}/>
    
  
    <input class="form-control" type="number" placeholder="Rate" id="example-email-input" onChange={changemovie}/>
 
    <input className="form-control" type="url" placeholder="Poster" id="example-url-input" onChange={changemovie}/>
  
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            submitMovies(addMovie);
            setAddMovie({ Title: "", Type: "", Rate: 0, Poster: "" });
            
              handleClose();
            }
          }
        >
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>

    )
}


export default Add;