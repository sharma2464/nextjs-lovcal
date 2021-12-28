// auth.tsx
import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, providers } from "../../firebase/config";

export default function Auth({ children }) {
  return (
    <div>
      <h1>Next Login</h1>
      <p>Please sign-in:</p>
      <>
        <button onClick={() => signInWithPopup(auth, providers.github)}>
          with github
        </button>
        <button onClick={() => signInWithPopup(auth, providers.google)}>
          with google
        </button>
        <button onClick={() => signInWithPopup(auth, providers.facebook)}>
          with facebook
        </button>
        <button onClick={() => signInWithPopup(auth, providers.twitter)}>
          with twitter
        </button>
      </>

      {/* <StyledFirebaseAuth
        uiConfig={{
          signInSuccessUrl: "/",
          //   signInOptions: [],
        }}
        firebaseAuth={auth}
      /> */}
    </div>
  );
}
