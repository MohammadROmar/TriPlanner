import { useNavigate } from "react-router-dom";

import ErrorBlock from "./UI/ErrorBlock/ErrorBlock.jsx";

export default function NewServiceActions({ hasInputError, hasSubmitError }) {
  const navigate = useNavigate();

  const navigateUp = () => navigate("../");

  return (
    <>
      <div className="new-service-actions">
        <button type="button" onClick={navigateUp}>
          Cancel
        </button>
        <button className="action">Create</button>
      </div>
      {(hasInputError || hasSubmitError) && (
        <ErrorBlock
          title={
            (hasInputError && "Input Is Invalid") ||
            (hasSubmitError && "Couldn't Create Service")
          }
          message={
            (hasInputError && "Please check your input and try again.") ||
            (hasSubmitError &&
              "Please check your inputs and connection try again")
          }
        />
      )}
    </>
  );
}
