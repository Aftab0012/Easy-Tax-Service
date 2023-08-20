import React, { useState } from "react";
import { Modal, Button, Form } from "antd";
import FileUploader from "./FileUploader";
import EmailInput from "./EmailInputField";
import PaymentAndAdditionalService from "./CheckOut";
import CheckboxGroupQuestion from "./CheckboxButtonsGroup";
import RadioButtons from "./RadioButtonsGroup";
import "../styles.css";

/**
 * Modal for adding a form.
 *
 * @param {boolean} visible - Determines if the modal is visible.
 * @param {function} hideModal - Callback function to hide the modal.
 * @param {function} onFormSubmit - Callback function to handle form submission.
 */
function AddFormModal({ visible, hideModal, onFormSubmit }) {
  const [form] = Form.useForm();
  const [currentPage, setCurrentPage] = useState(1);
  const [checkedValues, setCheckedValues] = useState([]);
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const [formValues, setFormValues] = useState({
    uploadedFiles1: [],
    uploadedFiles2: [],
    uploadedFiles3: [],
    uploadedFiles4: [],
    uploadedFiles5: [],
  });

  /**
   * Handles changes in the form fields.
   *
   * @param {string} field - Name of the field being changed.
   * @param {any} value - New value for the field.
   */
  const handleFormChange = (field, value) => {
    if (field === "uploadedFiles1") {
      setFormValues({
        ...formValues,
        uploadedFiles1: value,
      });
    } else if (field === "uploadedFiles2") {
      setFormValues({
        ...formValues,
        uploadedFiles2: value,
      });
    } else if (field === "uploadedFiles3") {
      setFormValues({
        ...formValues,
        uploadedFiles3: value,
      });
    } else if (field === "uploadedFiles4") {
      setFormValues({
        ...formValues,
        uploadedFiles4: value,
      });
    } else if (field === "uploadedFiles5") {
      setFormValues({
        ...formValues,
        uploadedFiles5: value,
      });
    } else if (field === "easyTaxes") {
      // Add this block for the new checkbox
      setFormValues({
        ...formValues,
        easyTaxes: value,
      });
    } else {
      // Handle other fields
      setFormValues({
        ...formValues,
        [field]: value,
      });
    }
  };

  /**
   * Handles radio button changes.
   *
   * @param {string} field - Name of the radio button field being changed.
   * @param {any} value - New value for the radio button field.
   */
  const handleRadioButtonChange = (field, value) => {
    setFormValues({ ...formValues, [field]: value });
  };

  /**
   * Handles checkbox changes.
   *
   * @param {string} field - Name of the checkbox field being changed.
   * @param {array} values - New values for the checkbox field.
   */
  const handleCheckboxChange = (field, values) => {
    setFormValues({ ...formValues, [field]: values });
    setCheckedValues(values);
  };

  /**
   * Handles form submission.
   */
  const handleFormSubmit = async () => {
    try {
      console.log("Validating fields...");
      await form.validateFields(["email"]);
      console.log("Validation passed. Submitting form...");
      let totalPrice = 0;
      if (formValues.easyTaxes) {
        totalPrice += 348;
      }

      const submittedForm = {
        email: formValues.email,
        question1: formValues.question1,
        question2: formValues.question2,
        question3: formValues.question3,
        checkboxOptions1: formValues.checkboxOptions1,
        checkboxOptions2: formValues.checkboxOptions2,
        uploadedFiles1: formValues.uploadedFiles1,
        uploadedFiles2: formValues.uploadedFiles2,
        uploadedFiles3: formValues.uploadedFiles3,
        uploadedFiles4: formValues.uploadedFiles4,
        uploadedFiles5: formValues.uploadedFiles5,
        easyTaxes: formValues.easyTaxes,
        totalPrice: totalPrice,
      };
      onFormSubmit(submittedForm);
      hideModal();
      console.log("Form submitted:", submittedForm);
    } catch (errorInfo) {
      console.error("Form submission error:", errorInfo);
    }
  };

  /**
   * Goes back to the previous page.
   */
  const handleBack = () => {
    setCurrentPage(currentPage - 1);
  };

  /**
   * Goes to the next page.
   */
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Modal
      width={800}
      className="modal"
      title="Create Form"
      visible={visible}
      onCancel={hideModal}
      footer={[
        <Button key="cancel" onClick={hideModal}>
          Cancel
        </Button>,
        <Button key="back" onClick={handleBack} disabled={currentPage === 1}>
          Back
        </Button>,
        <Button
          key="next"
          type="primary"
          onClick={currentPage === 1 ? handleNext : handleFormSubmit}
          disabled={currentPage === 2 && !formValues.checkboxOptions2}
        >
          {currentPage === 1 ? "Next" : "Submit"}
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        {currentPage === 1 && (
          <div>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email address",
                },
                {
                  pattern: emailRegex,
                  message: "Please enter a valid email address",
                },
              ]}
            >
              <EmailInput
                value={formValues.email}
                onChange={(value) => handleFormChange("email", value)}
              />
            </Form.Item>

            <RadioButtons
              label="Did you file the returns last year?"
              value={formValues.question1}
              onChange={(e) =>
                handleRadioButtonChange("question1", e.target.value)
              }
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <FileUploader
              label="Upload File"
              field="uploadedFiles1"
              fileList={formValues.uploadedFiles1}
              onChange={(info) =>
                handleFormChange("uploadedFiles1", info.fileList)
              }
            />

            <RadioButtons
              label="Did you file the returns last year?"
              value={formValues.question2}
              onChange={(e) =>
                handleRadioButtonChange("question2", e.target.value)
              }
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <FileUploader
              label="Upload File"
              field="uploadedFiles2"
              fileList={formValues.uploadedFiles2}
              onChange={(info) =>
                handleFormChange("uploadedFiles2", info.fileList)
              }
            />

            <RadioButtons
              label="Did you file the returns last year?"
              value={formValues.question3}
              onChange={(e) =>
                handleRadioButtonChange("question3", e.target.value)
              }
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <FileUploader
              label="Upload File"
              field="uploadedFiles3"
              fileList={formValues.uploadedFiles3}
              onChange={(info) =>
                handleFormChange("uploadedFiles3", info.fileList)
              }
            />
          </div>
        )}

        {currentPage === 2 && (
          <div>
            <CheckboxGroupQuestion
              label="Was there any following transactions in 2022?"
              value={formValues.checkboxOptions1}
              onChange={(values) =>
                handleCheckboxChange("checkboxOptions1", values)
              }
              options={[
                { value: "CapitalInfusion", label: "Capital Infusion" },
                { value: "CapitalWithdrawal", label: "Capital Withdrawal" },
                {
                  value: "RelatedPartyTransaction",
                  label: "Related Party Transaction",
                },
              ]}
            />

            <FileUploader
              label="Upload the Documents for the same:"
              field="uploadedFiles4"
              fileList={formValues.uploadedFiles4}
              onChange={(info) =>
                handleFormChange("uploadedFiles4", info.fileList)
              }
            />

            <CheckboxGroupQuestion
              label="Please upload the following Documents:"
              value={formValues.checkboxOptions2}
              onChange={(values) =>
                handleCheckboxChange("checkboxOptions2", values)
              }
              options={[
                { value: "Bank Statements", label: "Bank Statements" },
                {
                  value: "Credit Card Statements",
                  label: "Credit Card Statements",
                },
                { value: "Form 10991", label: "Form 10991" },
                { value: "Form 940/941", label: "Form 940/941" },
                { value: "EIN Certificate", label: "EIN Certificate" },
                {
                  value: "IRS Acceptance Letter of S-Corp",
                  label: "IRS Acceptance Letter of S-Corp",
                },
                {
                  value: "Financials (if prepared).",
                  label: "Financials (if prepared).",
                },
              ]}
            />

            <FileUploader
              label="Upload the Documents for the same:"
              field="uploadedFiles5"
              fileList={formValues.uploadedFiles5}
              onChange={(info) =>
                handleFormChange("uploadedFiles5", info.fileList)
              }
            />

            <PaymentAndAdditionalService
              formValues={formValues}
              handleFormChange={handleFormChange}
            />
          </div>
        )}
      </Form>
    </Modal>
  );
}

export default AddFormModal;
