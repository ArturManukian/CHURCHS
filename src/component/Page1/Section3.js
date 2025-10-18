import './Section3.sass';
import { Link } from 'react-router-dom';

function Pagination() {
  return (
    <div className="container">
      <Link className="pager next" to="/Page2" title="Next project">
        <span className="pager-project">ԽՈՐ ՎԻՐԱՊ</span>
        <span className="pager-icon"></span>
      </Link>
    </div>
  );
}

export default Pagination;
