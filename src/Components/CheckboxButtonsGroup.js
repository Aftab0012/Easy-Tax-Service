import React from "react";
import { Form, Checkbox } from "antd";

/**
 * A reusable component for rendering a group of checkboxes as a question.
 *
 * @param {string} label - The label for the checkbox group.
 * @param {array} value - The currently selected values from the checkbox group.
 * @param {function} onChange - Callback function to handle changes in checkbox selection.
 * @param {array} options - The available options for the checkbox group.
 */
function CheckboxGroupQuestion({ label, value, onChange, options }) {
  return (
    <Form.Item label={label}>
      {/* Checkbox group for the question */}
      <Checkbox.Group value={value} onChange={onChange}>
        {/* Map through the options and render checkboxes */}
        {options.map((option) => (
          <Checkbox key={option.value} value={option.value}>
            {option.label}
          </Checkbox>
        ))}
      </Checkbox.Group>
    </Form.Item>
  );
}

export default CheckboxGroupQuestion;
