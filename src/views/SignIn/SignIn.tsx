import React from "react";
import styles from "./styles.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
// Components
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Checkbox from "components/Checkbox/TextCheckbox";
// Icons
import { ReactComponent as Person } from "icons/person.svg";
import { ReactComponent as Lock } from "icons/lock.svg";
import { ReactComponent as Facebook } from "icons/facebook.svg";
import { ReactComponent as Google } from "icons/google.svg";
// Images
import logo from "images/logo.png";
import { ReactComponent as LogoText } from "images/logoText.svg";

interface AuthForm {
  login: string;
  password: string;
  rememberMe: boolean;
}

const formValidationSchema = Yup.object().shape({
  login: Yup.string().required("Wprowadź login"),
  password: Yup.string().required("Wprowadź hasło"),
});

const SignIn = () => {
  const initialValues: AuthForm = {
    login: "",
    password: "",
    rememberMe: false,
  };
  const formik = useFormik<AuthForm>({
    initialValues: initialValues,
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="logo" className={styles.logo} />
          <div className={styles.logoText}>
            {<LogoText height="15px" width="57px" />}
          </div>
        </div>
        <div className={styles.topTextContainer}>
          <div className={`${styles.topText} ${styles.topTextMobile}`}>
            Zaloguj się
          </div>
          <div className={`${styles.topText} ${styles.topTextDesktop}`}>
            Zaloguj się do aplikacji
          </div>
        </div>
        <form
          className={styles.form}
          onSubmit={formik.handleSubmit}
          onBlur={formik.handleBlur}
        >
          <div className={styles.formWrapper}>
            <Input
              type="text"
              icon={<Person />}
              name="login"
              id="login"
              value={formik.values.login}
              onChange={formik.handleChange}
              error={formik.touched.login && formik.errors.login}
              placeholder="login"
            />
            <Input
              type="password"
              icon={<Lock />}
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && formik.errors.password}
              placeholder="password"
            />
            <div className={styles.optionsContainer}>
              <Checkbox
                text="Zapamiętaj mnie"
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formik.values.rememberMe}
                onChange={formik.handleChange}
              />
              <span>Zapomniałeś hasła?</span>
            </div>
            <Button name="send" type="submit">
              ZALOGUJ SIĘ
            </Button>
          </div>
        </form>
        <div className={styles.optionalLoginContainer}>
          <span>Lub zaloguj się przez</span>
          <div className={styles.optionalLoginIcons}>
            <Facebook className={styles.optionalLoginIcon} />
            <Google className={styles.optionalLoginIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
