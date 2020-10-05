export default React.memo(function Footer() {
  return(
    <>
    <style jsx>
      {
        `
          .footer {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .footer a {
            display: inline-block;
            margin: 16px;
          }
        `
      }
    </style>
    <footer className="footer panel">
      <a href="https://app.codesignal.com/profile/andres-thefirst"  target="_blank">
        <img src="codesignal.svg" width="100px" alt="codesignal profile"/>
      </a>
      <a href="https://www.hackerrank.com/Andiikxz" target="_blank">
        <img src="hackerrank.svg" width="100px" alt="hackerrank profile"/>
      </a>
      <a href="https://www.codewars.com/users/Andiikxz" target="_blank">
        <img src="https://www.codewars.com/users/Andiikxz/badges/micro"  alt="codewars profile"/>
      </a>
    </footer>
    </>
  );
});