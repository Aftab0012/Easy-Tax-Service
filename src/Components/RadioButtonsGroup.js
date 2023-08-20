import React from "react";
import { Form, Radio } from "antd";

/**
 * Component for rendering a group of radio buttons as a form field.
 *
 * @param {string} label - Label for the radio button group.
 * @param {string} value - Currently selected value.
 * @param {function} onChange - Callback function for value change.
 * @param {array} options - List of radio button options.
 */
function RadioGroupQuestion({ label, value, onChange, options }) {
  return (
    <Form.Item label={label}>
      {/* Render a group of radio buttons */}
      <Radio.Group value={value} onChange={onChange}>
        {options.map((option) => (
          <Radio key={option.value} value={option.value}>
            {option.label}
          </Radio>
        ))}
      </Radio.Group>
    </Form.Item>
  );
}

export default RadioGroupQuestion;
