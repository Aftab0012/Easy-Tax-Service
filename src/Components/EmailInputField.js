import React from "react";
import { Form, Input } from "antd";
import "../styles.css";

/**
 * Component for rendering an email input field.
 *
 * @param {string} value - The current value of the email input field.
 * @param {function} onChange - Callback function to handle changes in the email input.
 */
function EmailInput({ value, onChange }) {
  return (
    <Form.Item label="Email">
      {/* Email input field */}
      <Input
        className="custom-email-input"
        placeholder="Enter your email"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </Form.Item>
  );
}

export default EmailInput;
