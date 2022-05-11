import "./App.css";
import Row from './component/Row'

function App() {
  function File_input() {
    document.getElementById("file_input").click();
  }
  return (
    <div className="mx-3">
      <div className="main  row mx-0 jumbotron" style={{ position: "relative" }}>
        <div className="sidebar mt-4    text-center col-12 col-md-1 col-lg-1">
          <div>
            <div className="for_pointer mb-5">
              <img src="./images/star.png" alt="" />
              <p className="fw-bold fs-5 mb-0">Star</p>
            </div>
            <div className="for_pointer for_hover py-2 my-2">
              <img src="./images/graph.png" alt="" />
              <p className="fw-bold fs-7 mt-1 mb-0">Doc Tray</p>
            </div>
            <div className="for_pointer for_active py-2 my-2">
              <img src="./images/document.png" alt="" />
              <p className="fw-bold fs-7 mt-1 mb-0">Doc Tray</p>
            </div>
            <div className="for_pointer for_hover py-2 my-2">
              <img src="./images/management.png" alt="" />
              <p className="fw-bold fs-7 mt-1 mb-0">management</p>
            </div>
          </div>

          <div>
            <div className="for_pointer py-2 my-2">
              <img src="./images/johny.png" alt="" />
            </div>
            <div className="for_pointer py-1 my-2">
              <img src="./images/settings.png" alt="" />
            </div>
            <div className="for_pointer py-1 my-2">
              <img src="./images/logout.png" alt="" />
            </div>
          </div>
        </div>

        <div className="upload col-12   col-md-5 col-lg-5 mx-0 mx-md-4 mx-lg-4 mt-5 mt-md-0 mt-lg-4">
          <div className="">
            <div className="d-flex justify-content-between align-items-center">
              <p className="fw-bold fs-5">Upload</p>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text" id="basic-addon2">
                  <img src="./images/search.png" alt="" />
                </span>
              </div>
            </div>
            <nav style={{ breadcrumbDivider: ">" }} aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="">Doc Type</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Upload
                </li>
                <li class="breadcrumb-item">
                  <a href="">Doc Training</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="">My Files</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="">Integeration</a>
                </li>
              </ol>
            </nav>
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0 fw-bold">Upload Invoices</p>

              <div className="d-flex align-items-center">
                <button
                  onClick={() => {
                    File_input();
                  }}
                  className="upload_btn px-3 py-1 me-1"
                >
                  <img src="./images/upload.png" alt="" /> Upload Documents
                </button>
                <input type="file" className="d-none" id="file_input" multiple />
                <button className="done_btn">
                  <img src="./images/tick.png" alt="" /> Done
                </button>
              </div>
            </div>
            <div className="preview mt-4 px-4 py-3 last_div">
              <div className="d-flex justify-content-between align-items-center">
                <p className="fw-bold fs-5 mb-0">Preview</p>
                <div className="d-flex align-items-center">
                  <img className="mx-2" src="./images/download.png" alt="" />
                  <img className="mx-2" src="./images/refresh.png" alt="" />
                </div>
              </div>
              <img src="images/invoice.png" className="w-100" alt="" />
              {/* <div className="mt-5 d-flex justify-content-between align-items-center mx-0 mx-md-2 mx-lg-3">
                <img src="./images/world.png" alt="" />
                <div>
                  <p className="mb-0 text-end fs-6 text-muted">
                    <span className="text-info me-2">@</span> your.mail@gmail.com
                  </p>
                  <p className="mb-0 text-end fs-6 text-muted">
                    <span className="text-info me-3">m</span> +386 989 271 3115
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-start flex-wrap">
                <div className="mt-4">
                  <div className="ms-2">
                    <p className="mb-3 fs-7">RECIPIENT</p>
                    <p className="mb-0 fs-7 text-muted">JOHN SMITH</p>
                    <p className="mb-0 fs-7 text-muted">4304 Liberty Avenue</p>
                    <p className="mb-0 fs-7 text-muted">92680 Tustin, CA</p>
                    <p className="mb-0 fs-7 text-muted">VAT no.: 12345678</p>
                  </div>
                  <div className="ms-2 mt-3" style={{ width: "max-content" }}>
                    <p className="mb-0 text-start fs-6 text-muted">
                      <span className="text-info me-2">@</span>{" "}
                      company.mail@gmail.com
                    </p>
                    <p className="mb-0 text-start fs-6 text-muted">
                      <span className="text-info me-2">m</span> +386 989 271 3115
                    </p>
                  </div>
                </div>
                <div className="mt-4 me-0 me-md-2 me-lg-3 text-center text-md-end text-lg-end">
                  <div className="ms-2">
                    <p className="mb-2 fw-bold fs-4">Invoice</p>
                    <p className="mb-0 fs-6 fw-bold">invoice no.</p>
                    <p className="mb-0 fs-7 text-muted mb-3">001/2021</p>
                    <p className="mb-0 fs-6 fw-bold">Invoice date</p>
                    <p className="mb-0 fs-7 text-muted">January 1, 2021</p>
                  </div>
                </div>
              </div>
              <div className="task_description mt-5">
                <div className="mt-5 d-flex justify-content-between align-items-start flex-wrap">
                  <div>
                    <p className="text-muted fs-7">TASK DESCRIPTION</p>
                  </div>
                  <div className="me-3 huraam d-flex justify-content-between align-items-start">
                    <p className="text-muted fs-7">HOURS</p>
                    <p className="text-muted fs-7">RATE</p>
                    <p className="text-muted fs-7">AMOUNT</p>
                  </div>
                </div>
                <hr />
                <div className=" d-flex justify-content-between align-items-start flex-wrap">
                  <div>
                    <p className="text-dark fs-7 mb-0 fw-bold">
                      Website redesign
                    </p>
                  </div>
                  <div className="me-3 huraam d-flex justify-content-between align-items-start">
                    <p className="text-dark mb-0 fs-8">20</p>
                    <p className="text-dark mb-0 fs-8">12 USD</p>
                    <p className="text-dark mb-0 fs-8">240,00 USD</p>
                  </div>
                </div>
                <hr />
                <div className=" d-flex justify-content-between align-items-start flex-wrap">
                  <div>
                    <p className="text-dark fs-7 mb-0 fw-bold">
                      Newsletter template design
                    </p>
                  </div>
                  <div className="me-3 huraam  d-flex justify-content-between align-items-start">
                    <p className="text-dark mb-0 fs-8">20</p>
                    <p className="text-dark mb-0 fs-8">12 USD</p>
                    <p className="text-dark mb-0 fs-8">240,00 USD</p>
                  </div>
                </div>
                <hr />
                <div className="d-flex mb-3 justify-content-end">
                  <div className="me-3  huraam d-flex justify-content-between align-items-start">
                    <p className="text-dark mb-0 fs-8">SUBTOTAL</p>

                    <p className="text-dark mb-0 fs-8">1140,00 USD</p>
                  </div>
                </div>
                <div className="d-flex boder_top justify-content-end ">
                  <div className="me-3 huraam d-flex mt-3 justify-content-between align-items-start">
                    <p className="text-dark mb-0 fs-8">DISCOUNT 5%</p>

                    <p className="text-dark mb-0 fs-8">57,00 USD</p>
                  </div>
                </div>
                <div className="d-flex boder_top justify-content-end ">
                  <div className="me-3 huraam d-flex mt-3 justify-content-between align-items-start">
                    <p className="text-dark fw-bold mb-0 fs-7">TOTAL</p>

                    <p className="text-info mb-0 fw-bold fs-7">1083,00 USD</p>
                  </div>
                </div>
                <div className="d-flex boder_top justify-content-end ">
                  <div className="me-3 huraam d-flex mt-3 justify-content-between align-items-start">
                    <p className="text-muted fw-bold mb-0 fs-9 text-end">
                      Transfer the amount to the business account below. Please
                      include invoice number on your check.
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-end align-items-center  mt-1">
                  <p className="text-muted fs-7 mx-3">
                    Bank: <span className="text-dark">FTSBUS33</span>{" "}
                  </p>

                  <p className="text-info fs-3 mx-3">
                    {" "}
                    <img src="./images/dot.svg" alt="" />{" "}
                  </p>
                  <p className="text-muted fs-7 mx-3">
                    IBAN: <span className="text-dark">GB82-1111-2222-3333</span>{" "}
                  </p>
                </div>
              </div>
              <div>
                <p className="fw-bolder text-dark">Note</p>
                <p className="fw-bolder fs-7 text-muted">
                  All amounts are in dollars. Please make the payment within 15
                  days from the issue of date of this invoice. Tax is not charged
                  on the basis of paragraph 1 of Article 94 of the Value Added Tax
                  Act (I am not liable for VAT).
                </p>
                <p className="fw-bolder fs-7 text-muted">
                  Thank you for you confidence in my work. <br />
                  Signiture
                </p>
              </div> */}
            </div>
          </div>
        </div>

        <div className="col px-0 pt-4">
          <div className=" mt-3  mt-md-0 mt-lg-0 preview p-3" >
            <div  >
              <div className="d-flex justify-content-between ">
                <div>
                  <p className="fw-bold fs-5">Uploaded Invoices</p>
                </div>
                <div>
                  <div class="dropdown  d-flex align-items-center">
                    <p className="mb-0 fw-bolder">Sort by:</p>
                    <button
                      class="btn drop_down fw-bolder dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      All
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          1
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          2
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          3
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between ">
                <div className="d-flex  align-items-center">
                  <div className="icon_bg_1 d-flex justify-content-center align-items-center ">
                    <img src="./images/allicon.svg" className="icon_1" alt="" />
                  </div>
                  <div>
                    <p className="mb-0 fs-9">
                      <span className="mx-1 fw-bolder">All:</span> 177doc,
                      480pages
                    </p>
                  </div>
                </div>
                <div className="d-flex  align-items-center">
                  <div className="icon_bg_2 d-flex justify-content-center align-items-center ">
                    <img
                      src="./images/tick_green.svg"
                      className="icon_1"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="mb-0 fs-9">
                      <span className="mx-1 fw-bolder">Processed:</span> 4doc,
                      8pages
                    </p>
                  </div>
                </div>
                <div className="d-flex  align-items-center">
                  <div className="icon_bg_3 d-flex justify-content-center align-items-center ">
                    <img
                      src="./images/round_arrow.svg"
                      className="icon_1"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="mb-0 fs-9">
                      <span className="mx-1 fw-bolder">Processing:</span> 7doc,
                      12pages
                    </p>
                  </div>
                </div>
                <div className="d-flex  align-items-center">
                  <div className="icon_bg_4 d-flex justify-content-center align-items-center ">
                    <img src="./images/alert.svg" className="icon_1" alt="" />
                  </div>
                  <div>
                    <p className="mb-0 fs-9">
                      <span className="mx-1 fw-bolder">Error:</span> 1doc, 1pages
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-2 d-flex justify-content-between align-items-center">
                <div>
                  <input type="checkbox" />
                </div>
                <div class="dropdown">
                  <button
                    class="btn drop_down fs-7 dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Invoice Id
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                      <a class="dropdown-item" href="#">
                        1
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        2
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        3
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="dropdown">
                  <button
                    class="btn drop_down fs-7 dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Date
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                      <a class="dropdown-item" href="#">
                        1
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        2
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        3
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="dropdown">
                  <button
                    class="btn drop_down fs-7 dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Status
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                      <a class="dropdown-item" href="#">
                        1
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        2
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        3
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <p className="fs-7 mt-3"> Menu</p>
                </div>

              </div>
            </div>
            <div className="scroll_menu last_div p-2F">
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />


            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
