import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
        font-size: 22px;        
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
        font-size: 22px;        
    }


    body,
    html,
    a {
        font-family: 'Motiva Sans Light', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
    }

    a:hover {
        color: #000b30;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #5fd3f2 0px 0px 0px 1px;
        }
    }

    h1 {
        {
            font-family: 'Motiva Sans Bold', serif;
            color: #000b30;
            font-size: 56px;
            line-height: 1.18;
    
            @media only screen and (max-width: 890px) {
              font-size: 47px;
            }
          
            @media only screen and (max-width: 414px) {
              font-size: 32px;
            }
        }
    }
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Motiva Sans Bold', serif;
        color: #000b30;
        font-size: 36px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 27px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 12px;
        }
    }

    p {
        color: #000b30;
        font-size: 22px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #5fd3f2;

        :hover {
            color: #5fd3f2;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;
