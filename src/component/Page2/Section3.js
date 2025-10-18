import './Section3.sass';
import { Link } from 'react-router-dom';

function Pagination() {
  return (
    <div className="container pack">
      <Link className="pager last" to="/" title="Last project">
        <span className="pager-icon"></span>
        Last <span className="pager-project">project</span>
      </Link>

      <Link className="pager next" to="/Page3" title="Next project">
        Next <span className="pager-project">project</span>
        <span className="pager-icon"></span>
      </Link>
    </div>
  );
}

export default Pagination;
