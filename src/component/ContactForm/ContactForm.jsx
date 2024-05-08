
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react"
import * as Yup from "yup";
import css from './ContactForm.module.css'


export default function ContactForm({ onAdd }) {
  const nameId = useId();
  const telId = useId()

  const handleSubmit = (values, actions) => {
    onAdd(values)
    actions.resetForm()
  }

const validationSchema = Yup.object().shape({
        name: Yup.string().max(50,"Too long!").required("Required"),
        number: Yup.number().required("Required"),
});
  
  return (
    <Formik initialValues={{
            name: "",
            number: "",
        }}

        onSubmit={handleSubmit}

        validationSchema={validationSchema}
    >
        
        <Form className={css.form}>
            <div className={css.formGroup}>
                <label htmlFor={nameId} className={css.label}>Name</label>
                <Field name="name" id={nameId} />
                <ErrorMessage name="name" component="span" />
            </div>
            <div className={css.formGroup}>
                <label htmlFor={telId} className={css.label}>Phone</label>
                <Field name="number" id={telId} />
                <ErrorMessage name="number" component="span"/>
            </div>

            <button type="submit" className={css.btn}>Add contact</button>
        </Form>
    </Formik>
  )
}