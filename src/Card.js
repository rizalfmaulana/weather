export default function Card({ title, number, unit, icon }) {
  return (
    <div className="card m-3 shadow">
      <p>{title}</p>
      <div className="cardContent">
        <img src={icon} alt="" height="100px" width="100px" />
        <div className="cardDesc">
          <h5>
            {number} {unit}
          </h5>
        </div>
      </div>
    </div>
  );
}
