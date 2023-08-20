import React from "react";
import { List } from "antd";
import "../styles.css";

/**
 * Formats file details for display.
 *
 * @param {array} files - List of files to be formatted.
 * @returns {string} - Formatted details of the files.
 */
function formatFilesDetails(files) {
  return files
    ? files
        .map(
          (file) =>
            `${file.name} (Size: ${file.size / 1024} KB, Type: ${file.type})`
        )
        .join(", ")
    : "[]";
}

/**
 * Component for rendering a list of form submissions.
 *
 * @param {array} forms - List of form submissions to be displayed.
 */
function FormList({ forms }) {
  console.log(forms);
  return (
    <List
      dataSource={forms}
      renderItem={(form, index) => (
        <List.Item key={index}>
          <div className="form-item">
            {/* Display details of each form submission */}
            Form No. {index + 1}: &#123;
            <br />
            &nbsp;&nbsp;"email": "{form.email}",
            <br />
            &nbsp;&nbsp;"question1": "{form.question1}",
            <br />
            &nbsp;&nbsp;"question2": "{form.question2}",
            <br />
            &nbsp;&nbsp;"question3": "{form.question3}",
            <br />
            &nbsp;&nbsp;"checkboxOptions1":{" "}
            {JSON.stringify(form.checkboxOptions1)},
            <br />
            &nbsp;&nbsp;"checkboxOptions2":{" "}
            {JSON.stringify(form.checkboxOptions2)},
            <br />
            &nbsp;&nbsp;"uploadedFiles1":{" "}
            {formatFilesDetails(form.uploadedFiles1)},
            <br />
            &nbsp;&nbsp;"uploadedFiles2":{" "}
            {formatFilesDetails(form.uploadedFiles2)},
            <br />
            &nbsp;&nbsp;"uploadedFiles3":{" "}
            {formatFilesDetails(form.uploadedFiles3)},
            <br />
            &nbsp;&nbsp;"uploadedFiles4":{" "}
            {formatFilesDetails(form.uploadedFiles4)},
            <br />
            &nbsp;&nbsp;"uploadedFiles5":{" "}
            {formatFilesDetails(form.uploadedFiles5)},
            <br />
            &nbsp;&nbsp;"paid": {form.easyTaxes ? "Yes" : "No"},{" "}
            {/* Display the value of easyTaxes */}
            <br />
            &nbsp;&nbsp;"totalPrice": ${form.totalPrice || 0},{" "}
            {/* Display the total price */}
            <br />
            &#125;
          </div>
        </List.Item>
      )}
    />
  );
}

export default FormList;
