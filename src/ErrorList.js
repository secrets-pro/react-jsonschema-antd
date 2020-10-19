import React from "react";

import Alert from "antd/lib/alert";
import List from "antd/lib/list";
import Icon from "antd/lib/icon";
const ErrorList = ({
  // errorSchema,
  errors
  // formContext,
  // schema,
  // uiSchema,
}) => {
  const renderErrors = () => (
    <List className="list-group" size="small">
      {errors.map((error, index) => (
        <List.Item key={index}>
          <Icon type="exclamation-circle" />
          {error.stack}
        </List.Item>
      ))}
    </List>
  );

  return (
    <Alert
      className="panel panel-danger errors"
      description={renderErrors()}
      message="Errors"
      type="error"
    />
  );
};

export default ErrorList;
