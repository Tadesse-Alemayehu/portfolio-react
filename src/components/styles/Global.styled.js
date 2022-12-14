import { createGlobalStyle } from "styled-components";

import maginors from "../../fonts/maginors-maginors-400.otf";
import Aquire from "../../fonts/AquireBold-8Ma60.otf";
import SansMateo from "../../fonts/SansMateo.ttf";
const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "maginors";
  src: url(${maginors});
}
@font-face {
  font-family: "Aquire";
  src: url(${Aquire});
}
@font-face {
  font-family: "SansMateo";
  src: url(${SansMateo});
}
  :root {
    --primary:#072144;
    --primary2: #314867;
    --primary-transparent: #072144c2;
    --primary-complement: #0951B2;
    --decoration1: #006837;
    --decoration1-2: #009144;
    --decoration2: #3BAFCA;
    --decoration2-light: #44CDEC;
    --shine: #00FFFF;
    --bright: #DAE028;
    --normal: #FFFFFF;
    --transparent: #fffff073;
    --main-title-font: maginors;
    --title-font: Aquire;
    --paragraph-font: SansMateo;
   }
   .gradientTopBottom{
    background: rgb(233,238,96);
background: linear-gradient(180deg, rgba(233,238,96,1) 0%, rgba(59,175,192,1) 100%);
   }
   #root{
    width: 100%;
   }
   body{
    background-color: var(--primary);
    color: var(--normal);
    margin: 0;
    padding: 0;
    display: flex;
   }
   #root {
    margin: 2vw 5vw;
   }
   h1{
    font-family: var(--main-title-font);
    font-weight: normal;
    color: var(--shine);
    font-size: 1.5rem;
    letter-spacing: 3px;
   }
   h2,h3{
    font-family: var(--title-font);
    color: var(--shine);
    font-size: 1.2rem;
    letter-spacing: 2px;
   }

   h3{
    font-size: 1.1rem;
    letter-spacing: 2px;
    color: var(--decoration2);
   }

   p {
    color: var(--transparent);
    font-family:  var(--paragraph-font);
   }
   a {
    color: var(--normal);
    text-decoration: none;
   }
   ul{
    margin: 0;
    padding: 0;
   }
   li{
    list-style: none;
   }
   .icon {
    max-width: 50px
   }
   .icon img{
    width: 100%;
   }
   hr.bright{
    border: 1px solid var(--bright);
   }
   .hide{
    display: none;
   }
   .link-button{
    background: transparent;
    color: white;
    border: none;
    outline: none;
   }
`;
export default GlobalStyles;
