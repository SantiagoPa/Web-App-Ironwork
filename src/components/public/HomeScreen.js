import { useNavigate } from "react-router-dom";
import imgCD from "../../assets/CarlosPNG.png";
import imgSP from "../../assets/sp-2.jpg";

export const HomeScreen = () => {
  const navigate = useNavigate();
  const handleLoginNavigate = () => {
    navigate("/login");
  };

  return (
    <>
      {/* <!-- Responsive navbar--> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand">Ironwork App</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About devs
                </a>
              </li>
              <li className="nav-itme">
                <button
                  onClick={handleLoginNavigate}
                  className="ms-4 btn btn-outline-warning"
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Header - set the background image for the header in the line below--> */}
      <div data-target="#home" id="home">
        <div
          className="py-5 bg-image-full"
          style={{
            backgroundImage:
              "url(https://source.unsplash.com/wfh8dDlNFOk/1600x900)",
          }}
        >
          <div className="text-center my-5">
            {/* <img
                className="img-fluid rounded-circle mb-4"
                src="https://dummyimage.com/150x150/6c757d/dee2e6.jpg"
                alt="..."
            /> */}
            <h1 className="text-white fs-3 fw-bolder">
              Web application that will take your business to the next level
            </h1>
            <p className="text-white-50 mb-0">Ironwork App :)</p>
          </div>
        </div>
        {/* <!-- Content section--> */}
        <section className="py-5">
          <div className="container my-5">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h2>No more Excel</h2>
                <p className="lead">
                  use our application to keep track of your inventory and view
                  accounting in an easy and intuitive way, it will also allow
                  you to manage transactions with your customers and suppliers.
                </p>
                <p className="mb-0">
                  Don't think about it too much, take advantage and join the
                  many people who digitize their businesses
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <!-- Image element - set the background image for the header in the line below--> */}
      <div data-target="#about" id="about">
        <div
          className="py-5 bg-image-full"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/4ulffa6qoKA/1200x800')",
          }}
        >
          {/* <!-- Put anything you want here! The spacer below with inline CSS is just for demo purposes!--> */}
          <div style={{ height: "20rem" }}>
            <div className="d-flex justify-content-around">
              <div className="row">
                <div className="col d-flex flex-column align-items-center">
                  <img
                    className="img-thumbnail img-sizing rounded-circle mb-4"
                    src={imgSP}
                    alt="..."
                  />
                  <span className="text-light">Santiago Padilla Arcia</span>
                  <span className="text-light">Systems engineer student</span>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex flex-column align-items-center">
                  <img
                    className="img-thumbnail img-sizing rounded-circle mb-4"
                    src={imgCD}
                    alt="..."
                  />
                  <span className="text-light">
                    Carlos Daniel Castro Maussa
                  </span>
                  <span className="text-light">Systems engineer student</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Content section--> */}
        <section className="py-5">
          <div className="container my-5">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h2>Motivations</h2>
                <p className="lead d-flex flex-column shadow-lg p-3">
                  <span>
                    <em>
                      "Learning and using new technologies is part of the
                      process to learn and get out of our comfort zone, although
                      sometimes we feel that things are not going well, it is
                      part of programming, it takes time but you find a
                      solution"
                    </em>
                  </span>
                  <span className="text-warning">
                    <em>Santiago Padilla</em>
                  </span>
                </p>
                <p className="mb-0 d-flex flex-column shadow-lg p-3">
                  <span>
                    <em>
                      "I don't do what I shouldn't do, and if I have gotta do
                      it, I'll do it quickly"
                    </em>
                  </span>
                  <span className="text-warning">
                    <em>Carlos Castro</em>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <!-- Footer--> */}
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright &copy; 2022</p>
        </div>
      </footer>
    </>
  );
};
