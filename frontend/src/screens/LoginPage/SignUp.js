import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../../utils/firebase.utils';
import styles from './SignIn.module.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    displayName,
    email,
    password,
    confirmPassword
  } = formFields;

  const _handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const _resetForm = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocFromAuth(user, { displayName: displayName });
      _resetForm();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        return alert('Cannot create account. Email already in use.')
      } else if (error.code === 'auth/weak-password') {
        return alert('Password should be at least 6 characters')
      } else {
        return console.log('user creation error: ', error);
      }
    }
  }

  return (
    <div className={styles.signIn}>
      <h2 className={styles.title}>Welcome to the Team!</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicInformation'>
          <Form.Label>Nickname</Form.Label>
          <Form.Control
            required
            name='displayName'
            placeholder='Enter nickname'
            value={formFields.displayName}
            onChange={_handleChange}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            name='email'
            type='email'
            placeholder='Enter email'
            value={formFields.email}
            onChange={_handleChange}
          />
          <Form.Text className='text-muted fs-7'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            name='password'
            type='password'
            placeholder='Password'
            onChange={_handleChange}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicConfirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            name='confirmPassword'
            type='password'
            placeholder='Confirm Password'
            onChange={_handleChange}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div >
  );
}

