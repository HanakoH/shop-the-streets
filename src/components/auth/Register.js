import React, {useRef, useState} from 'react';
import { useHistory } from "react-router-dom"
import { Field, Form, FormSpy } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBarNav from '../containers/AppBarNav';
import Typography from '../parts/Typography';
import AppForm from '../parts/AppForm';
import { email, required } from './form/Validation';
import RFTextField from './form/RFTextField';
import FormButton from './form/FormButton';
import FormFeedback from './form/FormFeedback';
import Grid from '@material-ui/core/Grid';

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
  const history = useHistory()
  const conflictDialog = useRef()
  const classes = styles();
  const [sent, setSent] = useState(false);

  const existingUserCheck = async values => {
    const email = values.email
    return await fetch(`http://localhost:8088/users?email=${email}`)
        .then(res => res.json())
        .then(user => !!user.length)
  }

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


  const onSubmit = async values => {

    existingUserCheck(values)
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                          firstName: values.firstName,
                          lastName: values.lastName,
                          email: values.email
                        })
                    })
                        .then(_ => _.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                sessionStorage.setItem("activeUser", createdUser.id)
                                sessionStorage.setItem("userName", createdUser.firstName)
                              }
                            history.push("/")
                            setSent(true)
                        })
                } else {
                    conflictDialog.current.showModal()
                  }
            })
}

  return (
    <>
      <dialog className="dialog dialog--password" ref={conflictDialog}>
          <div>Account with that email address already exists</div>
          <button className="button--close" 
          onClick={e => conflictDialog.current.close()}
          >
            Close</button>
      </dialog>
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
        <Form onSubmit={onSubmit} subscription={{ submitting: true }} validate={validate}>
          {({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    autoFocus
                    component={RFTextField}
                    autoComplete="fname"
                    fullWidth
                    label="First name"
                    name="firstName"
                    size="large"
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
                    size="large"
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
                size="large"
                required
              />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback className={classes.feedback} error>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                className={classes.button}
                disabled={submitting || sent}
                size="large"
                color="secondary"
                fullWidth
              >
                {submitting || sent ? 'In progress…' : 'Register'}
              </FormButton>
            </form>
          )}
        </Form>
      </AppForm>
    </>
  );
}