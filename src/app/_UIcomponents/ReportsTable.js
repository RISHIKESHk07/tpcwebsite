const ReportsTable = ({ reports }) => {
    return (
        <table className="table">
        <thead>
            <tr className="hover">
            <th></th>
            <th>Event Name</th>
            <th>Event Date</th>
            <th>Report Link</th>
            </tr>
        </thead>
        <tbody>
            {reports.map((report) => (
            <tr key={report.id} className="hover">
                <td>{report.id}</td>
                <td>{report.name}</td>
                <td>{report.date}</td>
                <td><a href={report.link} target="_blank">Click Here</a></td>
            </tr>
            ))}
        </tbody>
        </table>
    );
};

export default ReportsTable;