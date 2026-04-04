import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function Profile ({name, age, isStudent, hometown,children}) {
  return (
    <>
    {/* <h2>{props.name}</h2>
    <p>年齢：{props.age}</p>
    <p>{props.isStudent ? '学生' : '社会人'}</p> */}
    <h2>{name}</h2>
    <p>年齢：{age}</p>
    <p>{isStudent ? '学生' : '社会人'}</p>
    <p>出身地：{hometown}</p>
    {children}
    </>
  );}
function App() {


  
  const [count, setCount] = useState(0)

  
  
  const isGreen = true;
  
  
  
  const userName ='田中太郎';
  const age = 30;

  const price = 1000;
  const quantity =3;
  
  const isOpen = true;
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>最新のreactアプリ</h1>
          <Profile name="田中太郎" age={20} isStudent={true} hometown="東京">
          <p>趣味：プログラミング</p>
          </Profile>
          <Profile name="山本" age={30} isStudent={false} hometown="京都">
          <p>職業：デザイナー</p>
          </Profile>
          <Profile name="佐藤" age={40} isStudent={false} hometown="大阪"/>
          {/* <Profile name="佐藤" age={40} isStudent={false} hometown="大阪"/> */}

          {/* <p className={isGreen ? 'green' : 'red'}>サンプルテキスト</p> */}
          {/* コメントの書き方 */}
          {/* <p>{isOpen ? '営業中' : '閉店'}</p>
          <p>名前：{userName}</p>
          <p>年齢：{age}歳</p>
          <p>価格：{price}円</p>
          <p>税込価格：{price * 1.5}円</p>
          <p>数量：{quantity}個</p> */}
          {/* <h1 className="title">タイトル</h1>
          <label htmlFor="name">名前：</label>
          <input id="name" type="text" placeholder="あなたの名前を入力してください" /> */}
        </div>
        {/* <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button> */}
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
    
    
  )
}

export default App
