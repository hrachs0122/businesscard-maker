import {firebaseAuth, githubProvider, googleProvider} from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  logout() { 
    firebaseAuth.signOut();
  }

  onAuthChange(onUserChanged) { // onAuthChange 라는 콜백함수를 이용해서 onUserChanged 사용자가 바뀌었을때 콜백함수 받기
      firebaseAuth.onAuthStateChanged(user => {
          onUserChanged(user); // 사용자가 바뀔때마다 전달 받도록 onUserChanged에 user를 호출
      })
  }

  getProvider(providerName) {
    switch(providerName) {
      case 'Google':
        return googleProvider;
      case 'Github':
        return githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);  
    }
  }
}

export default AuthService;
