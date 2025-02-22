// import styled from 'styled-components';
import React from 'react';
// import styled  from 'styled-components/dist/constructors/constructWithOptions';
import styles from './Button.module.css';
// import './Button.css';

// const Button = styled.button`
//   width : 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 500px){
//     width: auto;
//   }

// &:focus {
//   outline: none;
// }

// &:hover,
// .button:active {
//   background: #ac0e77;
//   border-color: #ac0e77;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }
// `;
const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
