import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Field, Form } from 'react-final-form';
import Typography from '../components/Typography';
import AppBarNav from '../partView/AppBarNav';
import AppForm from '../components/AppForm';
import { email, required } from '../partView/auth/Validation';
import RFTextField from '../partView/auth/RFTextField';
import FormButton from '../partView/auth/FormButton';
import FormFeedback from '../partView/auth/FormFeedback';

const styles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}));

export function Register() {
  const classes = styles();
  const [sent, setSent] = React.useState(false);

  const validate = (values) => {
    const errors = required(['firstName', 'lastName', 'email'], values);

    if (!errors.email) {
      const emailError = email(values.email, values);
      if (emailError) {
        errors.email = email(values.email, values);
      }
    }

    return errors;
  };

  const handleSubmit = () => {
    setSent(true);
  };

  return (
    <>
      <AppBarNav />
      <AppForm>
        <>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Register
          </Typography>
          <Typography variant="body2" align="center">
            <Link href="/login" underline="always">
              Already have an account?
            </Link>
          </Typography>
        </>
        <Form onSubmit={handleSubmit} subscription={{ submitting: true }} validate={validate}>
          {({ handleSubmit2, submitting }) => (
            <form onSubmit={handleSubmit2} className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    autoFocus
                    component={RFTextField}
                    autoComplete="fname"
                    fullWidth
                    label="First name"
                    name="firstName"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    component={RFTextField}
                    autoComplete="lname"
                    fullWidth
                    label="Last name"
                    name="lastName"
                    required
                  />
                </Grid>
              </Grid>
              <Field
                autoComplete="email"
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
              />
              <FormButton
                className={classes.button}
                disabled={submitting || sent}
                color="secondary"
                fullWidth
              >
                {submitting || sent ? 'In progress…' : 'Complete Registering'}
              </FormButton>
            </form>
          )}
        </Form>
      </AppForm>
    </>
  );
}

// import React, { useRef } from "react"
// import { useHistory } from "react-router-dom"
// import { Button, Form,  } from 'semantic-ui-react'

// export const Register = (props) => {
//     const firstName = useRef()
//     const lastName = useRef()
//     const email = useRef()
//     const conflictDialog = useRef()
//     const history = useHistory()

//     const existingUserCheck = () => {
//         return fetch(`http://localhost:8088/users?email=${email.current.value}`)
//             .then(res => res.json())
//             .then(user => !!user.length)
//     }

//     const handleRegister = (e) => {
//         e.preventDefault()


//         existingUserCheck()
//             .then((userExists) => {
//                 if (!userExists) {
//                     fetch("http://localhost:8088/register", {
//                         method: "POST",
//                         headers: {
//                             "Content-Type": "application/json"
//                         },
//                         body: JSON.stringify({
//                             email: email.current.value,
//                             firstName: firstName.current.value,
//                             lastName: lastName.current.value
//                         })
//                     })
//                         .then(_ => _.json())
//                         .then(createdUser => {
//                             if (createdUser.hasOwnProperty("id")) {
//                                 sessionStorage.setItem("activeCoach", createdUser.id)
//                                 sessionStorage.setItem("coachName", createdUser.first_name)
//                                 history.push("/WelcomeCoach")
//                             }
//                         })
//                 }
//                 else {
//                     conflictDialog.current.showModal()
//                 }
//             })
        
//     }

//     return (
//         <main style={{ textAlign: "center" }}>

//             <dialog className="dialog dialog--password" ref={conflictDialog}>
//                 <div>Account with that email address already exists</div>
//                 <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
//             </dialog>

//             <Form  widths='equal' className="form--login" onSubmit={handleRegister}>
//                 <Header as='h1' className="h3 mb-3 font-weight-normal">Please Register for Happy Analytics</Header>
//                 <Form.Field>
//                     <label htmlFor="firstName"> First Name </label>
//                     <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
//                 </Form.Field>
//                 <Form.Field>
//                     <label htmlFor="lastName"> Last Name </label>
//                     <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
//                 </Form.Field>
//                 <Form.Field>
//                     <label htmlFor="inputEmail"> Email address </label>
//                     <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
//                 </Form.Field>
//                 <Form.Field>
//                     <Button type="submit"> Login </Button>
//                 </Form.Field>
//             </Form>
//         </main>
//     )
// }