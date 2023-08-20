import React from "react";
import { Form, Checkbox } from "antd";
import "../styles.css";

/**
 * Component for displaying payment and additional service options.
 *
 * @param {object} formValues - The current values of the form fields.
 * @param {function} handleFormChange - Callback function to handle changes in form values.
 */
function PaymentAndAdditionalService({ formValues, handleFormChange }) {
  return (
    <div>
      {/* Payment and additional service information */}
      <b>
        Please complete the below payment, and we'll prepare the tax file return
        within 48 hours.
      </b>

      {/* Checkbox for selecting EasyTaxes */}
      <Form.Item>
        <Checkbox
          value="easyTaxes"
          onChange={(e) => handleFormChange("easyTaxes", e.target.checked)}
          checked={formValues.easyTaxes}
        >
          {/* Additional service label and cost */}
          <span className="paymentVal">EasyTaxes (+$348)</span>
        </Checkbox>
      </Form.Item>
    </div>
  );
}

export default PaymentAndAdditionalService;
