import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div>
      <h1>Thank you for your submission!</h1>
      <p>We’ll get back to you soon.</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
};

export default SuccessPage;
