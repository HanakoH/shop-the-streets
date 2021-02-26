import React, {useRef, useState} from 'react';
import { useHistory } from "react-router-dom"
import { Field, Form, FormSpy } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBarNav from '../modules/AppBarNav';
import Typography from '../parts/Typography';
import AppForm from '../parts/AppForm';
import { email, required } from './form/Validation';
import RFTextField from './form/RFTextField';
import FormButton from './form/FormButton';
import FormFeedback from './form/FormFeedback';

const useStyles = makeStyles((theme) => ({
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

export function Login() {
    const existDialog = useRef()
    const history = useHistory()
    const classes = useStyles();
    const [sent, setSent] = useState(false);
 
    const validate = (values) => {
        const errors = required(['email', 'firstName'], values);

        if (!errors.email) {
        const emailError = email(values.email, values);
        if (emailError) {
            errors.email = email(values.email, values);
        }
        }

        return errors;
    };

    const existingUserCheck = async values => {
        const email = values.email
        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const onSubmit = async values => {
        existingUserCheck(values)
            .then(exists => {
                if (exists) {
                    sessionStorage.setItem("activeUser", exists.id)
                    sessionStorage.setItem("userName", exists.firstName)
                    setSent(true)
                    history.push("/")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

  return (
    <>
        <dialog className="dialog dialog--auth" ref={existDialog}>
            <div>User does not exist</div>
            <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
        </dialog>
      <AppBarNav />
      <AppForm>
        <>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Log In
          </Typography>
          <Typography variant="body2" align="center">
            {'Not a member yet? '}
            <Link href="/register" align="center" underline="always">
              Sign Up here
            </Link>
          </Typography>
        </>
        <Form onSubmit={onSubmit} subscription={{ submitting: true }} validate={validate}>
          {({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              <Field
                autoFocus
                autoComplete="fname"
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="First name"
                name="firstName"
                margin="normal"
                required
                size="large"
                />
              <Field
                autoComplete="email"
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                name="email"
                margin="normal"
                required
                size="large"
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
                {submitting || sent ? 'In progress…' : ' Login'}
              </FormButton>
            </form>
          )}
        </Form>
      </AppForm>
    </>
  );
}