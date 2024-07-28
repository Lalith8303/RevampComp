import Spline from '@splinetool/react-spline';
import styled from 'styled-components';
import IconLaptop from '../../assets/pngimages/icon-laptop.svg';
import Logo from '../../assets/pngimages/logo.svg';
import twitter from '../../assets/pngimages/icon-twitter.svg';
import Youtube from '../../assets/pngimages/icon-youtube.svg';
export default function Spl() {
  return (
    <Wrapper>
      <Spline className="spline" scene="https://prod.spline.design/V8fAcED4TvWtPfV5/scene.splinecode" />
      <Content>
        <Menu>
          <li><img src={Logo} alt='Logo'/></li>
          <li><a href='/'/>Home</li>
          <li><a href='/'/>About</li>
          <li><a href='/'/>Contact</li>
          <button>Get Started</button>
        </Menu>
        <h1>Collaborate with people</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
        <button><img src={IconLaptop} alt="Download"/>Download for Mac</button>
      </Content>
      <Social>
        <div />
        <img src={twitter} alt="Twitter"/>
        <img src={Youtube} alt="Youtube"/>

      </Social>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  color: white;
  position: relative;
  width: 100%;
  height: 100vh; /* Ensure the wrapper takes the full viewport height */
  
  .spline {
    position: absolute;
    
    height: 100%;
    top: 0;
    left: 20%; /* Adjust this value to move the animation to the right */
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px; /* Adjusted gap to fit better */

  h1 {
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    max-width: 500px;
  }

  p {
    font-family: "Spline Sans", sans-serif;
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
  }

  

button {
background: rgba(0, 0, 0, 0.2);
border: 0px;
font-size: 16px;
padding: 12px 30px;
border-radius: 14px;
border: 1px solid rgba(255, 255, 255, 0.1);
color: white; max-width: 280px;
backdrop-filter: blur (20px);
display: flex;
gap: 12px;
justify-content: center; align-items: center;
transition: 1s;
:hover {
border: 1px solid rgba(255, 255, 255, 0.8);
transform: translateY(-3px);
}
}

  h1, p, button {
    margin: 0 30px 0 100px;
  }
`;



const Menu = styled.ul` 
display: flex; gap: 30px;
align-items: center;
margin: 0 30px 0 100px; padding: 0;
li {
list-style: none;
margin: 0;
a {
}
}
text-decoration: none;
color: white;
padding: 8px 20px;
border: 1px solid rgba(255, 255, 255, 0); transition: 1s;
border-radius: 14px;
:hover {
}
border: 1px solid rgba(255, 255, 255, 0.2)
`;



const Social = styled.div` 
position: absolute;
top: 150px;
left: 30px;
display: flex;
flex-direction: column;
gap: 30px;
align-items: center;
div {
width: 1px;
height: 500px;
background: linear-gradient(
180deg,
#08b6f9 0%,
#6c56ef 33.57%,
#1306dd 65.86%,
#aa0eb2 100%
);
}`;
