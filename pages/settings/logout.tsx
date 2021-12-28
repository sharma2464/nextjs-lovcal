import { useRouter } from "next/router";
import { auth } from "../../firebase/config";

export default async function Logout(props) {
  const router = useRouter();
  if (auth.currentUser) {
    await auth.signOut();
    setTimeout(() => {
      return router.push("/auth");
    }, 1000);
  }
}
