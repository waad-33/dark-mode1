import React ,{useEffect, useState}from 'react'
import styled,{ThemeProvider} from 'styled-components'
import Candy from './Candy'
import {lightTheme,darkTheme,GlobalStyles, buttonTheme, darkButtonTheme} from './themes.js'
import Save from './Save'
import Sub from './Submit'
import {InputGroup,FormControl, Row,Col} from 'react-bootstrap'

const StyledApp = styled.div`
color:${(props) => props.theme.fontColor};
transition: all 0.30s linear;
`;
const SvgIcon = styled.svg`
color:${(props)=>props.theme.svgColor};
cursor:pointer;
`;
const Moon = styled.h2`
color:${(props) => props.theme.moonColor}
`;

function MoonIcon (){
    const [theme , setTheme] = useState(getInitialMode);
    useEffect(() =>{
localStorage.setItem('dark',JSON.stringify(theme))
    },[theme]);
    function getInitialMode(){
     const savedItem = JSON.parse(localStorage.getItem('dark'));
     return savedItem || false ;
    }
  
    return(
    <div>
      <ThemeProvider theme ={theme === false?lightTheme:darkTheme}>
        <GlobalStyles/>
     <StyledApp>
     <div style={{marginTop:"100px"}}></div>
      <div className="row float-right ">
         <div className="col-sm-12 ">
        
      <SvgIcon  onClick={()=> setTheme(prevMode => !prevMode)}  className="icon" style={{width:"50px" , height:"50px"}} viewBox="0 0 24 24" theme={theme==="light"?lightTheme:darkTheme} >
      <path fill="currentColor" d="M12 2A9.91 9.91 0 0 0 9 2.46A10 10 0 0 1 9 21.54A10 10 0 1 0 12 2Z" />
      </SvgIcon>
        </div>
      </div>

      <div className="row mb-4">
       <Moon className="col-sm-6" theme={theme === false?lightTheme:darkTheme }>Dark Mode Challenge</Moon>
      </div> 
      <Candy/>

      <Row className="mt-4">
        <Col>
        <InputGroup size="sm" className="mb-3 ">
         <FormControl
         placeholder="Name"
         aria-label="Name"/>
        </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
         <InputGroup size="sm" className="mb-3 ">
           <FormControl
           placeholder="Email"
           aria-label="Email" />
         </InputGroup>
       </Col>
    </Row>
     </StyledApp>
      </ThemeProvider>

      <div class="btn-toolbar mt-5 float-right">
      <ThemeProvider theme = {theme=== false?buttonTheme:darkButtonTheme}>
        <div className="btn-group mr-1">
        
      <Save />
        </div>
      </ThemeProvider>

      <ThemeProvider theme={theme=== false?lightTheme:darkTheme}>
        <div className="btn-group"> 
       
      <Sub />
      </div>
      
      </ThemeProvider>
       </div>
       </div>
    )
}
export default MoonIcon;