"use client";

export default function Home() {
  const data = [
    { column1: "Data 1-1", column2: "Data 1-2" },
    { column1: "Data 2-1", column2: "Data 2-2" },
    // Add more data as needed
  ];

  return (
    <main>
      <div className="scrollableTableContainer">
        <table className="table">
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 2</th>
              <th>Header 2</th>
              <th>Header 2</th>
              <th>Header 2</th>
              <th>Header 2</th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.column1}</td>
                <td>{row.column2}</td>
                <td>{row.column2}</td>
                <td>{row.column2}</td>
                <td>{row.column2}</td>
                <td>{row.column2}</td>
                <td>{row.column2}</td>
                <td>{row.column2}</td>
                <td>{row.column2}</td>
                {/* Add more columns as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
