import { useId } from "react";
import { Formik, Form, Field, type FormikHelpers } from "formik";
import * as Yup from "yup";

const ValidationSchema = Yup.object().shape({
  name: Yup.string().min(2).max(30).required(),
});

interface InitialValues {
  name: string;
}

const initalValues: InitialValues = {
  name: "",
};

export default function ExampleForm() {
  const fieldId = useId();

  const handleSubmit = (
    values: InitialValues,
    actions: FormikHelpers<InitialValues>
  ) => {
    console.log("handleSubmit", values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initalValues}
      onSubmit={handleSubmit}
      validationSchema={ValidationSchema}
    >
      <Form>
        <label htmlFor={`${fieldId}-name`}>Name</label>
        <Field name="name" type="text" id={`${fieldId}-name`} />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
