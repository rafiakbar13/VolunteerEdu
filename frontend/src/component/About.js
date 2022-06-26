import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  FaFacebook,
  FaInstagram,
  FaGithub,
} from 'react-icons/fa';


export default function About() {
  return (
    <MDBContainer className="pt-5 mt-5">
      <MDBRow>
        <MDBCol className="me-5">
        <h3 className="fw-bold fs-2 text-primary">VISI</h3>
        <p className="fs-4 text-start pt-3">VolunterEdu adalah sebuah wadah untuk mengajak semua lapisan masyarakat ikut terlibat dalam memajukan pendidikan di Indonesia.Kami mengajak siapupun untuk melihat ke arah sama yaitu gotong royong dalam urusan pendidikan di Indonesia</p>

        </MDBCol>
        <MDBCol>
         <h3 className="fw-bold fs-3 text-primary">MISI</h3>
          <ol>
            <li className="fs-4 text-start pt-3">
              Menjalin kerjasama dengan masyarakat untuk meningkatkan kualitas pendidikan di Indonesia
            </li>
            <li className="fs-4 text-start">
              Menjalin kerjasama dengan masyarakat untuk meningkatkan kualitas pendidikan di Indonesia
            </li>
            <li className="fs-4 text-start">
              Menjalin kerjasama dengan masyarakat untuk meningkatkan kualitas pendidikan di Indonesia
            </li>
          </ol>
        </MDBCol>
      </MDBRow>
      <div className="container my-5">
        <section className="team-section text-center dark-grey-text">
            <h2 className="font-weight-bold mb-4 pb-4 text-start text-primary">FOUNDER</h2>
            <div className="row d-flex justify-content-center">
                <div className="col-md mb-4">
                    <div className="avatar mx-auto">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img (30).jpg" className="rounded-circle shadow"/>
                    </div>
                    <h4 className="font-weight-bold mb-3 mt-3">Muhammad Rafi Akbar</h4>
                    <p className="text-uppercase blue-text"> <strong>Frontend Developer</strong></p>
                    <a type="button" className=" btn-md mx-2 mb-0">
                        <FaFacebook />
                    </a>
                    <a type="button" className=" btn-md mx-2 mb-0">
                        <FaInstagram />
                    </a>
                    <a type="button" className=" btn-md mx-2 mb-0">
                        <FaGithub />
                    </a>
                </div>
                <div className="col-md mb-4">
                    <div className="avatar mx-auto">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img (30).jpg" className="rounded-circle shadow" />
                    </div>
                    <h4 className="font-weight-bold mb-3 mt-3">Sechan Al Farisi</h4>
                    <p className="text-uppercase blue-text"> <strong>Frontend  Developer</strong></p>
                    <a type="button" className=" btn-md mx-2 mb-0">
                        <FaFacebook />
                    </a>
                    <a type="button" className=" btn-md mx-2 mb-0">
                        <FaInstagram />
                    </a>
                    <a type="button" className=" btn-md mx-2 mb-0">
                        <FaGithub />
                    </a>
                </div>
                <div className="col-md mb-4">
                    <div className="avatar mx-auto">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img (30).jpg" className="rounded-circle shadow"/>
                    </div>
                    <h4 className="font-weight-bold mb-3 mt-3">Ni Luh Dita</h4>
                    <p className="text-uppercase blue-text"> <strong>Frontend  Developer</strong></p>
                    <a type="button" className=" btn-md mx-2 mb-0">
                        <FaFacebook />
                    </a>
                    <a type="button" className=" btn-md mx-2 mb-0">
                        <FaInstagram />
                    </a>
                    <a type="button" className=" btn-md mx-2 mb-0">
                        <FaGithub />
                    </a>
                </div>
                <div className="col-md mb-4">
                    <div className="avatar mx-auto">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img (30).jpg" className="rounded-circle shadow" />
                    </div>
                    <h4 className="font-weight-bold mb-3 mt-3">Dzihan</h4>
                    <p className="text-uppercase blue-text"> <strong>Frontend  Developer</strong></p>
                    <a type="button" className=" btn-md mx-2 mb-0">
                        <FaFacebook />
                    </a>
                    <a type="button" className=" btn-md mx-2 mb-0">
                        <FaInstagram />
                    </a>
                    <a type="button" className=" btn-md mx-2 mb-0">
                        <FaGithub />
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="avatar mx-auto p-4">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img (30).jpg" className="rounded-circle shadow"/>
                    </div>
                    <h4 className="font-weight-bold mb-3">Dewi Sugianti</h4>
                    <p className="text-uppercase blue-text"> <strong>Backend Developer</strong></p>
                    <a type="button" className=" btn-md mx-2 mb-0">
                        <FaFacebook />
                    </a>
                    <a type="button" className=" btn-md mx-2 mb-0">
                        <FaInstagram />
                    </a>
                    <a type="button" className=" btn-md mx-2 mb-0">
                        <FaGithub />
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="avatar mx-auto p-4">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img (30).jpg" className="rounded-circle shadow" />
                    </div>
                    <h4 className="font-weight-bold mb-3">Arin Cantika</h4>
                    <p className="text-uppercase blue-text"> <strong>Backend Developer</strong></p>
                    <a type="button" className=" btn-md mx-2 mb-0">
                        <FaFacebook />
                    </a>
                    <a type="button" className=" btn-md mx-2 mb-0">
                        <FaInstagram />
                    </a>
                    <a type="button" className=" btn-md mx-2 mb-0">
                        <FaGithub />
                    </a>
                </div>
            </div>
        </section>
    </div>
    </MDBContainer>  
  );
}