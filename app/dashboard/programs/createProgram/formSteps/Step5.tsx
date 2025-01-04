import { Field } from "formik";

export function Step5() {
  return (
    <div>
      <h3>Additional Information</h3>

      <label htmlFor="age">Age</label>
      <Field as="select" name="age" id="age">
        <option value="">Select Age</option>
        <option value="<18">&lt; 18</option>
        <option value="19-25">19 - 25</option>
        <option value="26-50">26 - 50</option>
        <option value="51-70">51 - 70</option>
        <option value="71+">&gt; 71</option>
      </Field>

      <label htmlFor="trainingFrequency">Training Frequency (per week)</label>
      <Field type="number" name="trainingFrequency" id="trainingFrequency" />

      <label htmlFor="bodyType">Body Type</label>
      <Field as="select" name="bodyType" id="bodyType">
        <option value="">Select Body Type</option>
        <option value="slim">Slim</option>
        <option value="average">Average</option>
        <option value="fat">Fat</option>
      </Field>

      <label htmlFor="notes">Notes</label>
      <Field as="textarea" name="notes" id="notes" />
    </div>
  );
}
