import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <Link to='/details'>
        <h1>이력서</h1>
      </Link>
      <p>
        <a
          href={`https://www.google.com/search?q=${encodeURIComponent('성민')}`}
        >
          성민
        </a>
      </p>
      <img
        src='https://hakwonsin.s3.ap-northeast-2.amazonaws.com/m.jpg'
        alt='Profile'
        style={{ width: '100px', height: '350px' }}
      />
      <h2 id='hey-i-m-min-'>Hey 👋, I&#39;m Min!</h2>
      <p>
        I am a developer who enjoys exploring the interconnectedness of the
        world and is always open to learning new technologies (Web Developer 🌐,
        App Developer 📱, Junior Designer 🎨)
        <br />
        <br />
      </p>
      <p>
        <img
          align='right'
          alt='GIF'
          src='https://raw.githubusercontent.com/rahul-jha98/rahul-jha98/main/techstack.gif'
          width='360px'
        />
      </p>
      <h3 id='-more-about-me-'>🧐 More About Me:</h3>
      <ul>
        <li>
          🔭 &nbsp; I’m currently working on <strong>Hakwonsin</strong>
        </li>
        <li>🤝 &nbsp; I’m looking to collaborate on Hakwonsin Project</li>
        <li>🌱 &nbsp; I’m currently learning Computer Science</li>
        <li>
          👨🏻‍💻 &nbsp; Most of my projects are available on{' '}
          <a href='https://github.com/mini-777?tab=repositories'>Github</a>
        </li>
        <li>
          💬 &nbsp; Ask me about anything tech related, I am happy to help
        </li>
        <li>
          📝 &nbsp; Checkout my{' '}
          <a href='https://www.jobkorea.co.kr/User/Resume/View?rNo=26078508'>
            resume
          </a>
        </li>
      </ul>
      <p>
        <br />
      </p>
      <h3 id='-languages-and-tools-'>🔨 Languages and Tools:</h3>
      <p>
        <a
          href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
          target='_blank'
          rel='noreferrer'
        >
          {' '}
          <img
            align='left'
            alt='JavaScript'
            height='42px'
            src='https://raw.githubusercontent.com/rahul-jha98/github_readme_icons/main/language_and_tools/square/javascript/javascript.svg'
          />
        </a>
        <a
          href='https://www.typescriptlang.org/'
          target='_blank'
          rel='noreferrer'
        >
          <img
            align='left'
            alt='Typescirpt'
            height='42px'
            src='https://raw.githubusercontent.com/rahul-jha98/github_readme_icons/main/language_and_tools/square/typescript/typescript.svg'
          />
        </a>
        <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>
          {' '}
          <img
            align='left'
            alt='React'
            height='42px'
            src='https://raw.githubusercontent.com/rahul-jha98/github_readme_icons/main/language_and_tools/square/react/react.svg'
          />
        </a>
        <a href='https://nodejs.org' target='_blank' rel='noreferrer'>
          <img
            align='left'
            alt='Node.js'
            height='42px'
            src='https://raw.githubusercontent.com/rahul-jha98/github_readme_icons/main/language_and_tools/square/node/node.svg'
          />
        </a>
        <a href='https://git-scm.com/' target='_blank' rel='noreferrer'>
          {' '}
          <img
            src='https://raw.githubusercontent.com/rahul-jha98/github_readme_icons/main/language_and_tools/square/git-scm/git-scm.svg'
            align='left'
            alt='git'
            height='42px'
          />{' '}
        </a>
        <a href='https://www.figma.com/' target='_blank' rel='noreferrer'>
          {' '}
          <img
            src='https://raw.githubusercontent.com/rahul-jha98/github_readme_icons/main/language_and_tools/square/figma/figma.svg'
            alt='figma'
            height='42px'
          />{' '}
        </a>
      </p>
      <p>
        <br />
      </p>
      <h3 id='-github-stats'>📊 Github Stats</h3>
      <p>
        <Link href='https://github.com/mini-777/github-stats-transparent' />
      </p>
      <p>
        <img
          src='https://raw.githubusercontent.com/mini-777/github-stats-transparent/output/generated/overview.svg'
          alt='Stats Overview'
        />
      </p>
      <p>
        <br />
      </p>
      <h3 id='-my-projects'>🛠️ My Projects</h3>
      <table>
        <thead>
          <tr>
            <th>날짜</th>
            <th>내용</th>
            <th>코멘트</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2021</td>
            <td>ERP System 개발 - 무진오토라이프(주)</td>
            <td>완료</td>
          </tr>
          <tr>
            <td>2023</td>
            <td>IOS Bluetooth 모듈 개발 - 배터와이(주)</td>
            <td>완료</td>
          </tr>
          <tr>
            <td>2024</td>
            <td>학원의 신 프로젝트 - 학원의 신(주)</td>
            <td>진행중</td>
          </tr>
          <tr>
            <td>2024</td>
            <td>기업 협력 프로젝트 - 케어온 (주)</td>
            <td>진행중</td>
          </tr>
        </tbody>
      </table>
      <h3 id='-career'>🚩CAREER</h3>
      <table>
        <thead>
          <tr>
            <th>날짜</th>
            <th>내용</th>
            <th>코멘트</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2024 - 01</td>
            <td>[2024 소프트웨어인 신년인사회 - 개인]</td>
            <td>미래인재상 - 한국 소프트웨어산업협회장상</td>
          </tr>
          <tr>
            <td>2023 - 12</td>
            <td>[공개 SW개발 포트폴리오 경진대회 - 개인]</td>
            <td>은상 - 소프트웨어 교육원장상</td>
          </tr>
          <tr>
            <td>2023 - 11</td>
            <td>[2023 대구를 빛내는 해커톤 - 쌀국수(팀장)]</td>
            <td>대상 - 과학기술정보통신부 장관상</td>
          </tr>
          <tr>
            <td>2023 - 08</td>
            <td>[SW 교육원 창업아이템 경진대회 - 페이리오(팀원)]</td>
            <td>우수상 - 소프트웨어 교육원장상</td>
          </tr>
          <tr>
            <td>2023 - 06</td>
            <td>[2023 SW 중심대학 해커톤 - 그림판(팀장)]</td>
            <td>대상 - 대구디지털혁신진흥원장상</td>
          </tr>
          <tr>
            <td>2023 - 06</td>
            <td>[2023 Microsoft Hackers Ground - Get It(팀장)]</td>
            <td>대상 - 한국마이크로소프트</td>
          </tr>
          <tr>
            <td>2023 - 06</td>
            <td>[SW 교육원 창업 해커톤 - 삼첩분식(팀장)]</td>
            <td>최우수상 - 소프트웨어 교육원장상</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;
