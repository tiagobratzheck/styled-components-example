import styled from 'styled-components';

export const Lista = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;    
    border: 1px solid #e7e7e7;
    background-color: #f3f3f3;

    li {
    float: left;
    }
  
    li a {
    display: block;
    color: #111;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    }  

    li a:hover {
    background-color: #1abc9c
    }
`;

export const Bar = styled.div`
    position: relative;
    padding: ${props => `${props.pad}px`};
    text-align: center;
    background: #1abc9c;
    color: white;
    font-size: ${props => `${props.fontSize}px`};  
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 20px;
`;

export const Cards = styled.div`
    padding: 30px;    
    transition: 0.3s;
    text-align: center;
    border-radius: 5px;
    border: 2px solid #1abc9c;

    img {
    width: 50%;   
    border-radius: 5px 5px 0 0; 
}  
`;

export const CardContainer = styled.div`
    padding: 2px 16px;
`;

  