import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const GoBackButton = styled(Link)`
  width: 80px;
  padding: 4px 12px;
  margin: 8px;

  font-family: inherit;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  text-align: center;

  cursor: pointer;

  background-color: #a70000;
  color: #F4F4FD;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

	&:hover {
		background-color: #ff0000;
	}
`;

export const MovieContainer = styled.section`
  padding: 8px;
`;

export const MovieField = styled.div`
  display: flex;
  padding: 8px;
`;

export const Info = styled.div`
  margin-left: 8px;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 20px;
  color: #2E2F42;
`;

export const Text = styled.p`
  margin-bottom: 12px;
  color: #434455;
`;

export const SubTitle = styled.h3`
  margin-bottom: 16px;
  color: #2E2F42;
`;

export const AdditionalList = styled.ul`
  display: flex;
  margin: 8px 0px;
`;

export const AdditionalLink = styled(Link)`
  padding: 8px;
  margin: 8px;
  color: #E7E9FC;
  background-color: #404BBF;
  border-radius: 4px;
`;