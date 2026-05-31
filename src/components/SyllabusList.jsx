function SyllabusList({ syllabus }) {
  return (
    <div className="card mb-4">

      <div className="card-body">

        <h4>Syllabus</h4>

        <ol>

          {syllabus.map((item,index)=>(
            <li key={index}>
              {item}
            </li>
          ))}

        </ol>

      </div>

    </div>
  );
}

export default SyllabusList;