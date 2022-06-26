import React from 'react';
import { MDBContainer,MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import "bootstrap/dist/css/bootstrap.min.css";
export default function Admin() {
  return (
    <>
      <MDBContainer>
      <MDBCard className='mb-3 w-50 mx-auto bg-white shadow mt-5'>
        <MDBCardBody className='text-center'>
          <MDBCardTitle>Welcome to the Administrator Page</MDBCardTitle>
          <MDBCardText>
            Silakan bernavigasi ke users,Gallery dan Class untuk melakukan manipulasi data...
          </MDBCardText>
        </MDBCardBody>
        <MDBCardImage position='bottom' src='https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?w=2000' alt='...' />
      </MDBCard>
      </MDBContainer>
    </>
  );
}