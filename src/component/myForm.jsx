// src/MyForm.js

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation Schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  state: Yup.string().required('State is required'),
 
  age: Yup.number().required('Age is required').positive('Age must be a positive number').integer('Age must be an integer'),
  password: Yup.string().required('Password is required'),
});

function MyForm() {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        state: '',
        
        age: '',
        password: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <Field type="tel" id="phone" name="phone" className="form-control" />
            <ErrorMessage name="phone" component="div" className="text-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="state">State:</label>
            <Field as="select" id="state" name="state" className="form-control">
              <option value="">Select State</option>
              <option value="California">Bihar</option>
              <option value="Texas">Gujrat</option>
              <option value="New York"> UP</option>
              {/* Add more states as needed */}
            </Field>
            <ErrorMessage name="state" component="div" className="text-danger" />
          </div>

          

          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <Field type="number" id="age" name="age" className="form-control" />
            <ErrorMessage name="age" component="div" className="text-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <Field type="password" id="password" name="password" className="form-control" />
            <ErrorMessage name="password" component="div" className="text-danger" />
          </div>

          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default MyForm;
