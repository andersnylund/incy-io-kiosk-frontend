import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import '../css/style.css';


class BigButton extends Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        text: PropTypes.string.isRequired
    }
    render() {
        const ButtonContainer = styled.div`
margin:8px;
	

        `;

        const TextContainer = styled.div`
        padding:60px 60px; 
        margin:5px;
        text-decoration:none;
        text-shadow:0px 1px 0px #005667;
        color: #ffffff;
        font-size:19px;
        font-weight:bold;
        
        `;
        return (
            <ButtonContainer>
                <Button className="newButton" variant="contained" onClick={this.props.onClick}>
                    <TextContainer>{this.props.text}</TextContainer>
                </Button>
            </ButtonContainer>
        )
    }
}

export default BigButton;
