import React, { useState } from "react";
import { db, storage } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import MapComponent from "./MapComponent"; 
import "../styles/ReportForm.css";

const ReportForm = () => {
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [position, setPosition] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          });
        },
        () => alert("Location access denied. Please enable GPS.")
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = "";
    if (image) {
      const imageRef = ref(storage, `reports/${image.name}`);
      await uploadBytes(imageRef, image);
      imageUrl = await getDownloadURL(imageRef);
    }

    await addDoc(collection(db, "reports"), {
      imageUrl,
      location: position ? `${position.lat}, ${position.lng}` : location,
      description,
      timestamp: serverTimestamp()
    });

    alert("Report submitted!");
  };

  return (
    <div className="report-form-container">
      <form className="report-form" onSubmit={handleSubmit}>
        <h2>📸 Report Illegal Wildlife Trade</h2>

        <label>Upload Evidence:</label>
        <input type="file" onChange={handleFileChange} required />

        <label>Enter Location:</label>
        <input 
          type="text" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          placeholder="City, Country" 
          required 
        />

        <div className="location-button">
          <button type="button" className="use-location-btn" onClick={getLocation}>
            📍 Use Current Location
          </button>
        </div>

        <div className="map-container">
          <MapComponent position={position} />
        </div>

        <label>Describe the Incident:</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Provide details..." 
          required 
        />

        <button type="submit">🚨 Submit Report</button>
      </form>
    </div>
  );
};

export default ReportForm;
