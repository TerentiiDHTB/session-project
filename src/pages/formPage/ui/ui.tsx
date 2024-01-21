import styles from "./ui.module.scss";

import {Field, Form, Formik} from "formik";

enum FIELDERRORS{
    REQUIRED = "поле необходимо к заполнению",
    LENGTHERROR = "должно быть более 1 символа",
    EMAILERROR = "введите валидный адрес электронной почты"
}

interface ValidationFields {
    firstName?: string,
    lastName?: string,
    email?: string,
    event?: string
}

const validate = (values: ValidationFields): ValidationFields => {
    const errors: ValidationFields = {};
    if (!values.firstName) {
        errors.firstName = FIELDERRORS.REQUIRED;
    } else if (values.firstName.length < 2) {
        errors.firstName = FIELDERRORS.LENGTHERROR;
    }

    if (!values.lastName) {
        errors.lastName = FIELDERRORS.REQUIRED;
    } else if (values.lastName.length < 2) {
        errors.lastName = FIELDERRORS.LENGTHERROR;
    }

    if (!values.email) {
        errors.email = FIELDERRORS.REQUIRED;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = FIELDERRORS.EMAILERROR;
    }

    return errors;
};

export const FormPage = () => {
    return (
        <div className={styles.formPageWrapper}>
            <Formik
                    initialValues={
                        {
                            firstName: "",
                            lastName: "",
                            email: "",
                            event: ""
                        }
                    }
                    validate={validate}
                    onSubmit={
                        values => {alert(JSON.stringify(values, null, 2));
                }
            }
            >
                {props => (
                    <Form className={styles.formWrapper}>
                        <label htmlFor="firstName">ваше имя:</label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={props.handleChange}
                            value={props.values.firstName}
                        />
                        {props.errors.firstName&& <div className={styles.errorMessage}>{props.errors.firstName}</div>}

                        <label htmlFor="lastName">ваша фамилия:</label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={props.handleChange}
                            value={props.values.lastName}
                        />
                        {props.errors.lastName&& <div className={styles.errorMessage}>{props.errors.lastName}</div>}

                        <label htmlFor="email">ваша почта:</label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            onChange={props.handleChange}
                            value={props.values.email}
                        />
                        {props.errors.email&& <div className={styles.errorMessage}>{props.errors.email}</div>}

                        <label htmlFor="eventName">выберите эвент:</label>
                        <Field as="select" name="eventName">
                            <option value="Ekspo1">ЭкспоФорум1</option>
                            <option value="Ekspo2">ЭкспоФорум2</option>
                            <option disabled value="Ekspo0">Экспофорум0</option>
                        </Field>

                        <button type="submit">отправить</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
