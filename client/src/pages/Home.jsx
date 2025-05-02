import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div>
      <h1>Welcome to rentalo</h1>
      <Link to="/market"><button>Buy / Rent / Sell</button></Link>
      <Link to="/workers"><button>Hire Workers</button></Link>
    </div>
  );
}
