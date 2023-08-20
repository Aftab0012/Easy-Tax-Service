import React from "react";
import { Form, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";

/**
 * Component for rendering a file uploader with drag and drop functionality.
 *
 * @param {string} label - The label for the file uploader.
 * @param {string} field - The name of the field for which files are being uploaded.
 * @param {array} fileList - The list of files that have been uploaded.
 * @param {function} onChange - Callback function to handle changes in uploaded files.
 */
function FileUploader({ label, field, fileList, onChange }) {
  return (
    <Form.Item label={label}>
      {/* File uploader with drag and drop */}
      <Upload.Dragger fileList={fileList} onChange={onChange}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
      </Upload.Dragger>
    </Form.Item>
  );
}

export default FileUploader;
