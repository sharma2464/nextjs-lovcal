import Layout1 from "../components/layouts";
import { AuthProvider } from "../providers/auth";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout1>
        <Component {...pageProps} />
      </Layout1>
    </AuthProvider>
  );
}

export default MyApp;
