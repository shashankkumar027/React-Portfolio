import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai';


const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={
            "https://media.licdn.com/dms/image/C4E03AQHQTU2Yso_pzw/profile-displayphoto-shrink_200_200/0/1651379993081?e=1681948800&v=beta&t=YTI5dq88K1OERK9kLxr5oIK8Hrk4dZwOhEjojBzMpDU"
          }
          alt="Shashank"
        />
        <h2>Shashank Kumar</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a
            target={"blank"}
            href="https://www.linkedin.com/in/shashankkumar27/"
          >
            <AiFillLinkedin />
          </a>
          <a
            target={"blank"}
            href="https://github.com/shashankkumar027/"
          >
            <AiFillGithub />
          </a>
          <a target={"blank"} href="https://www.instagram.com/">
            <AiFillInstagram />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
}

export default Footer