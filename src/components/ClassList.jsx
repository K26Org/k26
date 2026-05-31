function ClassList({ classes }) {
  return (
    <div className="card mb-4">
      <div className="card-body">

        <h4>Available Classes</h4>

        <ul className="list-group">

          {classes.map((item,index)=>(
            <li
              key={index}
              className="list-group-item"
            >
              {item}
            </li>
          ))}

        </ul>

      </div>
    </div>
  );
}

export default ClassList;