import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
    const history = useHistory();
    const goToMaker = userId => {
        history.push({
            pathname: '/maker',
            state: {id: userId},
        });
    };

    const onLogin = event => {
        authService //
        .login(event.currentTarget.textContent) // 로그인이 된 데이터가 받아지면
        .then(data => goToMaker(data.user.id)); // data에서 goToMaker 를 호출, data 안에있는 user라는 오브젝트 안에있는 ui전달
    };

    useEffect(() => { // useEffect 를 사용해서 components 가 mount 가 되거나 update 가 될때 적용, 로그인을 담당하는 auth_service에서 적용해주기!
        authService.onAuthChange(user => { // 사용자가 로그인을 했다면 유저라는 데이터가 있을것이고 사용자가 로그아웃을 했다면 user 가 null 
            user && goToMaker(user.id); 
        });
    });
    
    return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
    );
};

export default Login;
