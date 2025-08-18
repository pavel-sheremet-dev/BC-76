import { useId } from "react";
import css from "./OrderForm.module.css";
import { Formik, Form, Field, type FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";

const OrderFormSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Min 2 symbols")
    .max(30, "max 30 symbols")
    .required("Required"),
  email: Yup.string().email("Email should be valid").required(),
  delivery: Yup.string().oneOf(["drone", "courier", "pickup"]).required(),
  restrictions: Yup.array().of(
    Yup.string().oneOf(
      ["nut-free", "gluten-free", "vegan"],
      "Can be only next values: `nut-free`, `courier`, `pickup` "
    )
  ),
  deliveryTime: Yup.string()
    .oneOf(["evening", "afternoon", "morning"])
    .required(),
  message: Yup.string().max(250),
});

interface InitialValues {
  username: string;
  email: string;
  message?: string;
  delivery: string;
  restrictions: string[];
  deliveryTime: string;
}

const initalValues: InitialValues = {
  username: "",
  email: "",
  message: "",
  delivery: "courier",
  restrictions: [],
  deliveryTime: "",
};

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default function OrderForm() {
  const fieldId = useId();

  const handleSubmit = async (
    values: InitialValues,
    actions: FormikHelpers<InitialValues>
  ) => {
    await sleep(2000);
    console.log("handleSubmit", values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initalValues}
      onSubmit={handleSubmit}
      validationSchema={OrderFormSchema}
    >
      {(formik) => {
        // formik.touched
        console.log("formik.isValid", formik.isValid);
        return (
          <Form className={css.form}>
            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Client Info</legend>
              <label htmlFor={`${fieldId}-username`} className={css.label}>
                Name
              </label>
              <Field
                name="username"
                type="text"
                id={`${fieldId}-username`}
                className={css.input}
              />
              <ErrorMessage
                name="username"
                component="div"
                className={css.error}
              />
              <label htmlFor={`${fieldId}-email`} className={css.label}>
                Email
              </label>
              <Field
                type="text"
                name="email"
                id={`${fieldId}-email`}
                className={css.input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Delivery method</legend>

              <label className={css.option}>
                <Field type="radio" name="delivery" value="pickup" />
                Pickup
              </label>
              <label className={css.option}>
                <Field type="radio" name="delivery" value="courier" />
                Courier
              </label>
              <label className={css.option}>
                <Field type="radio" name="delivery" value="drone" />
                Drone delivery
              </label>
              <ErrorMessage
                name="delivery"
                component="div"
                className={css.error}
              />
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Dietary restrictions</legend>

              <label className={css.option}>
                <Field type="checkbox" name="restrictions" value="vegan" />
                Vegan
              </label>
              <label className={css.option}>
                <Field
                  type="checkbox"
                  name="restrictions"
                  value="gluten-free"
                />
                Gluten-free
              </label>
              <label className={css.option}>
                <Field type="checkbox" name="restrictions" value="nut-free" />
                Nut-free
              </label>
              <ErrorMessage
                name="restrictions"
                component="div"
                className={css.error}
              />
            </fieldset>

            <label htmlFor={`${fieldId}-deliveryTime`} className={css.label}>
              Preferred delivery time
            </label>
            <Field
              as="select"
              name="deliveryTime"
              id={`${fieldId}-deliveryTime`}
              className={css.input}
            >
              <option value="" disabled>
                -- Choose delivery time --
              </option>
              <option value="morning">Morning (8:00-12:00)</option>
              <option value="afternoon">Afternoon (12:00-16:00)</option>
              <option value="evening">Evening (16:00-20:00)</option>
            </Field>
            <ErrorMessage
              name="deliveryTime"
              component="div"
              className={css.error}
            />

            <label htmlFor={`${fieldId}-message`} className={css.label}>
              Additional message (
              {250 - (formik.values.message?.length ?? 0) <= 0
                ? 0
                : 250 - (formik.values.message?.length ?? 0)}
              )
            </label>
            <Field
              as="textarea"
              name="message"
              rows={4}
              id={`${fieldId}-message`}
              className={css.textarea}
            />
            <ErrorMessage
              name="message"
              component="div"
              className={css.error}
            />

            <button
              disabled={!formik.isValid}
              type="submit"
              className={css.button}
            >
              {formik.isSubmitting ? "...loading" : "Place order"}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
