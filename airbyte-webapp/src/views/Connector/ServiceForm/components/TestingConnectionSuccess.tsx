import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import { StatusIcon } from "components";

const LoadingContainer = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.darkPrimaryColor};
  margin-top: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Success = styled(StatusIcon)`
  width: 26px;
  min-width: 26px;
  height: 26px;
  padding-top: 5px;
  font-size: 17px;
`;

const TestingConnectionSuccess: React.FC = () => (
  <LoadingContainer data-id="success-result">
    <Success success />
    <FormattedMessage id="form.successTests" />
  </LoadingContainer>
);

export default TestingConnectionSuccess;
