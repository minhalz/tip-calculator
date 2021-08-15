function Error({ isError, value }) {
  return (
    <>
      {isError === "required" && (
        <p className="absolute top-0 right-0 text-yellow-500 error">
          Can&apos;t be empty.
        </p>
      )}
      {parseFloat(value) === 0 && (
        <p className="absolute top-0 right-0 text-yellow-500 error">
          Can&apos;t be zero.
        </p>
      )}
    </>
  );
}

export default Error;
