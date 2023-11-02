import styled from 'styled-components';

export const Button = styled.button`
width: 120px;
padding:20px;
opacity:0.8;
cursor: pointer;
border:none;
border-radius:4px;
background-color: ${props => {
      switch(props.children){
case 'good':
    return 'green';
    case 'neutral':
        return 'orange';
        case 'bad':
            return 'red';
            default :
            return 'grey'
      }
    }
   };
&:hover{ opacity:1; }


`