/* eslint-disable react/prop-types */
function Footer({ footerElement }) {
  return (
    <>
      <div className="footer" ref={footerElement}>
        <p>&copy; 2024 Recipe App. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
