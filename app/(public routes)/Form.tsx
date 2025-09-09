"use client";

import {
  TextFormValue,
  useDraftStore,
  useDraftHydration,
} from "@/lib/store/draftStore";

import { Field, Formik, FormikHelpers, Form, useFormikContext } from "formik";

import { useEffect } from "react";

const DraftController = () => {
  const { values } = useFormikContext<TextFormValue>();
  const setDraft = useDraftStore((state) => state.setDraft);

  const hasHydrated = useDraftHydration();

  useEffect(() => {
    if (!hasHydrated) return;
    setDraft(values);
  }, [hasHydrated, setDraft, values]);

  return null;
};

const TextForm = () => {
  const clearDraft = useDraftStore((state) => state.clearDraft);
  const draft = useDraftStore((state) => state.draft);

  const handleSubmit = (
    values: TextFormValue,
    actions: FormikHelpers<TextFormValue>
  ) => {
    console.log("values", values);
    clearDraft();
    actions.resetForm();
  };

  return (
    <Formik initialValues={draft} onSubmit={handleSubmit} enableReinitialize>
      <Form>
        {" "}
        <label>
          <Field name="username" />
        </label>
        <label>
          <Field name="text" />
        </label>
        <button type="submit">Submit</button>
        <DraftController />
      </Form>
    </Formik>
  );
};

export default TextForm;
