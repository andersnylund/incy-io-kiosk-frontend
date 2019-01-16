import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import '../css/style.css';

export const TextContainer = styled.div`
    padding:10px 10px;
    margin:5px;
    text-decoration:none;
    text-shadow:0px 1px 0px #005667;
    color: #ffffff;
    font-size:19px;
    font-weight:bold;
    width: 150px;
    border: 0px solid #000000;
    word-wrap: break-word;
`;

const ButtonContainer = styled.div`
    margin:8px;
`;

const BigButton = ({ onClick, text }) => (
    <ButtonContainer>
        <Button className="newButton" variant="contained" onClick={onClick}>
            <TextContainer>{text}</TextContainer>
        </Button>
    </ButtonContainer>
);

BigButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

export default BigButton;
