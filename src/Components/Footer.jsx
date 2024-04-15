/* eslint-disable react/prop-types */
function Footer({ reff }) {
  return (
    <>
      <div className="footer" ref={reff}>
        <p>&copy; 2024 Recipe App. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
