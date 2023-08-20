import React, { useState } from "react";
import FormList from "./Components/FormList";
import AddFormModal from "./Components/AddFormModal";
import "./styles.css";

/**
 * Main App component.
 */
const App = () => {
  // State to manage the list of forms and modal visibility
  const [forms, setForms] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  // Function to show the add form modal
  const showModal = () => {
    setModalVisible(true);
  };

  // Function to hide the add form modal
  const hideModal = () => {
    setModalVisible(false);
  };

  // Callback function to handle form submission
  const handleFormSubmit = (newForm) => {
    setForms([...forms, newForm]);
  };

  return (
    <div>
      <div className="header">
        <div className="brand-name">
          {/* Logo */}
          <img
            className="logo-img"
            src="https://img.freepik.com/free-vector/tax-service-branding-identity-corporate-vector-logo-bundle-design_460848-13825.jpg"
            alt="Logo"
          />
        </div>
        {/* Button to open the modal */}
        <button className="button" onClick={showModal}>
          Add Form
        </button>
      </div>

      {/* Display the list of forms */}
      <FormList forms={forms} />

      {/* AddFormModal component */}
      <AddFormModal
        visible={modalVisible}
        showModal={showModal}
        hideModal={hideModal}
        onFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default App;
