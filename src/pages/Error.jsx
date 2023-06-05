import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Sorry!</h1>
      <p>An unexpected error has occurred.</p>
      <h4>
        <i>{error.statusText || error.message}</i>
      </h4>
      <p>{error.data}</p>
    </div>
  );
};

export default Error;
