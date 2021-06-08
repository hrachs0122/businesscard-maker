import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  logout() { 
    firebase.auth().signOut();
  }

  onAuthChange(onUserChanged) { // onAuthChange 라는 콜백함수를 이용해서 onUserChanged 사용자가 바뀌었을때 콜백함수 받기
      firebase.auth().onAuthStateChanged(user => {
          onUserChanged(user); // 사용자가 바뀔때마다 전달 받도록 onUserChanged에 user를 호출
      })
  }
}

export default AuthService;
