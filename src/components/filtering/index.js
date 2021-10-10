import './styles.css';

function Filtering() {
  return (
    <div className="filtering">
      <p>Sort Order</p>
      <div className="filterWrapper">
        <select className="selectInput">
          <option>Order Added</option>
          <option>Title</option>
        </select>
        <div className="buttonsWrapper">
          <button>Ascending</button>
          <button>Descending</button>
        </div>
      </div>
    </div>
  );
}

export default Filtering;
