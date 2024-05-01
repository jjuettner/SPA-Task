import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

interface FileUploadProps {
  onFileChange : (content:string | ArrayBuffer | null) => void
}


export const FileUpload = (props:FileUploadProps) => {
  const [file,setFile] = useState(null)

  const fileChange = (fileInput:any) => {
    const file = fileInput.target.files[0]
    setFile(file)
  }

  const fileUpload = () => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        props.onFileChange(reader.result)
      },false,
    );
    
    if(file !== null){
      reader.readAsText(file)
    }
  }
  
  return (
    <div>
      <Row>
        <Col sm={6}></Col>
        <Col sm={5}>
          <Form.Group controlId="formFile" className="mb-3" data-bs-theme="light">
            <Form.Control type="file" onChange={fileChange}/>
          </Form.Group>
          </Col>
        <Col sm={1}>
          <Button variant='success' onClick={fileUpload}>
            Upload!
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default FileUpload;