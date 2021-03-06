import React, { useState } from "react";
import "../assets/Home.css";
import "../assets/second.css";
import { Link ,useNavigate} from "react-router-dom";

export default function ToggleSidebar() {
  const [isOpen, setIsopen] = useState(false);
const navigate= useNavigate();
  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

const [inputArr,setInputArr]=useState([]);
const [inputdata, setInputdata] = useState({
  "name":"",
  "email":"",
  "number":"",
  "message":""
})
const inputhandler=(e)=>
{
  const name=e.target.name;
  const value=e.target.value;
  setInputdata({...inputdata,[name]:value});
}
const formhandler=(e)=>
{
 e.preventDefault();
 setInputArr([...inputArr,inputdata]);
 navigate('/blog');
  console.log(inputArr);

 
}
  return (
    <>
      <div className="container-fluid mt-3">
        <nav className="navbar navbar-expand-lg navbar-light shadow-md">
          <div className="container-fluid p-2 px-4">
            <a className="navbar-brand text-primary mr-0">
              <Link to="/" className="sd-link">
                {" "}
                <img
                  src="https://dev.valere.io/uploads/icon/Logolight.svg"
                  style={{ width: "150px" }}
                />
              </Link>
            </a>

            <div className="form-inline ml-auto">
              <button
                type="button"
                className="btn btn-contact"
                
               
                data-bs-toggle="modal"
              
                data-bs-target="#exampleModal"
              >

                ContactUs
              </button>

              <div className="" onClick={ToggleSidebar}>
                <img src="https://dev.valere.io/uploads/icon/menulight.svg" />
              </div>
            </div>
          </div>
        </nav>

        <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
          <div className="sd-header">
            <div className="" onClick={ToggleSidebar}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAEXA5v7PVC-btVgYP8CHBFffUhYV9aiNB4efAcmW_XiwcF5fS_QB9BQcqudwJWjauOwU&usqp=CAU"
                style={{ width: "30px" }}
              />
            </div>
          </div>
          <div className="sd-body">
            <div className="row">
              <div className="col-md-7">
                <h3>What does ???Valere??? mean?</h3>
                <p className="pt-2">
                  The Latin verb valere, meaning ???be strong??? or ???be well,??? was
                  extended in meaning to refer to worth, in both practical and
                  aesthetic terms. This word represents and inspires how Valere
                  approach product development.
                </p>
              </div>
              <div className="col-md-4 ">
                <ul>
                  <li>
                    <Link to="/blog" className="sd-link">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/ourwork" className="sd-link">
                      OurWork
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-1">
                <ul className="social-icon-list">
                  <li>
                    <a href="https://www.linkedin.com/authwall?trk=bf&amp;trkInfo=AQGnvW_XltoSkwAAAYCEexMgxeJ0Ry9hHz7OoxlfghngGwxMJR0uI4Akkf6t-DoauXahploTZjsbpPe50bQ_Wd02mnYRiHW6Btu8Yjs2jd6Jw5tQjLbXPgzInEY9YsqbSf6wCIE=&amp;originalReferer=&amp;sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fvalerelabs">
                      <img src="https://dev.valere.io/uploads/icon/linkedin.png" />
                    </a>
                  </li>
                  <li>
                    <a href="https://join.skype.com/invite/yGa1KTfEJ1VT">
                      <img src="https://dev.valere.io/uploads/icon/skype.png" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/accounts/login/?next=/valerelabs/">
                      <img src="https://dev.valere.io/uploads/icon/instagram.png" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/Valerelabs">
                      <img src="https://dev.valere.io/uploads/icon/twitter.png" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/valerelabsusa/">
                      <img src="https://dev.valere.io/uploads/icon/facebook.png" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
      </div>

      <div
        className="modal contact-modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title text-white" id="exampleModalLabel">
                Contact Us
              </h3>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row text-white d-flex align-items-center">
                <div className="col-md-6">
                  <form method="post" onSubmit={formhandler} >
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        onChange={inputhandler}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        onChange={inputhandler}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Number"
                        name="number"
                        onChange={inputhandler}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        name="message"
                        onChange={inputhandler}
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-contact">
                      Submit
                    </button>
                  </form>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <h5>Call</h5>
                    <p>7894561231</p>
                  </div>
                  <div className="row">
                    <h5>Email</h5>
                    <p>info@valere.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/*<button type="button" className="btn btn-primary">Save changes</button>*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
