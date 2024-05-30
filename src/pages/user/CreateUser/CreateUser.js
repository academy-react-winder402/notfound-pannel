import { Form, Formik } from 'formik'
import React from 'react'
import InputFloating from '../../../component/InputFloating/InputFloating'
import { Button, Col, Input, Row } from 'reactstrap'
import http from '../../../core/services/interceptore'

const CreateUser = () => {
  const handleCreateUser =async (values) => {
    const res=await http.post('/User/CreateUser',values);

    console.log(res);
  }
  
  return (
    <div>
      <Formik onSubmit={handleCreateUser} initialValues={{lastName : '' , firstName : '' , gmail : '' , password : '' , phoneNumber : '' , isStudent : true , isTeacher : false}}>
        {({values , handleChange})=>(
          <Form>
          <Row>
            <Col md='5' sm='12'>
              <div className='form-floating'>
                <Input name='lastName' value={values.lastName} onChange={handleChange} type='text' id='floatingInput' placeholder='lastName' />
                <label htmlFor='floatingInput'>lastName</label>
              </div>
            </Col> 

            <Col md='1'></Col>

            <Col md='5' sm='12'>
              <div className='form-floating'>
                <Input name='firstName' value={values.firstName} onChange={handleChange} type='text' id='floatingInput' placeholder='firstName' />
                <label htmlFor='floatingInput'>firstName</label>
              </div>
            </Col>           
          </Row>

          

          <Row style={{marginTop:'50px'}}>
            <Col md='5' sm='12'>
              <div className='form-floating'>
                <Input name='gmail' value={values.gmail} onChange={handleChange} type='text' id='floatingInput' placeholder='gmail' />
                <label htmlFor='floatingInput'>gmail</label>
              </div>
            </Col> 

            <Col md='1'></Col>

            <Col md='5' sm='12'>
              <div className='form-floating'>
                <Input name='password' value={values.password} onChange={handleChange} type='password' id='floatingInput' placeholder='password' />
                <label htmlFor='floatingInput'>password</label>
              </div>
            </Col>           
          </Row>


          <Row style={{marginTop:'50px'}}>
            <Col md='5' sm='12'>
              <div className='form-floating'>
                <Input name='phoneNumber' value={values.phoneNumber} onChange={handleChange} type='text' id='floatingInput' placeholder='phoneNumber' />
                <label htmlFor='floatingInput'>phoneNumber</label>
              </div>
            </Col> 

            <Col md='1'></Col>

            <Col md='2' sm='12'>
              <div className='form-floating'>
                <Input name='isStudent' value={values.isStudent} onChange={handleChange} type='checkbox' id='floatingInput' placeholder='isStudent' />
                <label htmlFor='floatingInput'>isStudent</label>
              </div>
            </Col> 
            
           <Col md='1'></Col>

            <Col md='2' sm='12'>
              <div className='form-floating'>
                <Input name='isTeacher' value={values.isTeacher} onChange={handleChange} type='checkbox' id='floatingInput' placeholder='isTeacher' />
                <label htmlFor='floatingInput'>isTeacher</label>
              </div>
            </Col>                       
          </Row>          


            <Button type='submit' color='primary'>create</Button>
          </Form>          
        )}

      </Formik>
    </div>
  )
}

export default CreateUser