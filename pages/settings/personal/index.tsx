import { useAuth } from "../../../providers/auth";

export default function Personal(props) {
  const { currentUser }: any = useAuth();
  return (
    <>
      Personal
      <br />
      <pre style={{ margin: "auto" }}>
        {JSON.stringify(currentUser, null, 2)}
      </pre>
    </>
  );
}
