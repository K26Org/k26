function BatchList({ batches }) {

  return (
    <div className="card mb-4">

      <div className="card-body">

        <h4>Current Batches</h4>

        {batches.map((batch,index)=>(

          <div
            key={index}
            className="border rounded p-3 mb-3"
          >

            <h5>{batch.name}</h5>

            <p>
              Start Date:
              {" "}
              {batch.startDate}
            </p>

            <p>
              Schedule:
              {" "}
              {batch.schedule}
            </p>

            <p>
              Time:
              {" "}
              {batch.time}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default BatchList;