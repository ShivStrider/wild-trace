import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Dashboard.css";
import reportChart from "../assets/reportChart.png"; // Import the chart image

const Dashboard = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const querySnapshot = await getDocs(collection(db, "reports"));
      const reportData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setReports(reportData);
    };

    fetchReports();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>📊 Reported Cases</h2>
      <div className="dashboard-grid">
        <div className="reports-section">
          <ul className="dashboard-list">
            {reports.map(report => (
              <li key={report.id} className="report-card">
                <img src={report.imageUrl} alt="report" className="report-image" />
                <div className="report-details">
                  <p><strong>{report.description}</strong></p>
                  <p className="location-text">
                    <FaMapMarkerAlt /> {report.location}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="chart-section">
          <img src={reportChart} alt="Report Chart" className="chart-image" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;