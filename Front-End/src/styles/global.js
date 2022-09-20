import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
    --pink: #FF577F;
    --purple: #59323F;
    --black: #121214;
    --darkgrey:#212529;
    --greycolor:#343B41;
    --grey: #212529;
    --lightgrey: #868E96;
    --white:#F8F9FA;
    --green:#3FE864;
    --red:#E83F5B;
}
body{
    background: var(--black);
    font-family: 'Inter', sans-serif;
    font-size:15px;
    background:  var(--black);
    color:var(--white);
    
}`;
