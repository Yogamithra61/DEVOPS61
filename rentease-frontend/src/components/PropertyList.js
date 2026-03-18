import React, { useEffect, useState } from 'react';
import propertyService from '../services/PropertyService';
import './PropertyList.css';

function PropertyList() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = () => {
    setLoading(true);
    setError(null);
    propertyService.getAllProperties()
      .then(response => {
        setProperties(response.data || []);
        setError(null);
      })
      .catch(error => {
        console.error('Error loading properties:', error);
        setError('Failed to load properties. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading properties...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <button className="retry-button" onClick={loadProperties}>
          Retry
        </button>
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="empty-container">
        <p>No properties available.</p>
      </div>
    );
  }

  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'available':
        return 'status-available';
      case 'rented':
        return 'status-rented';
      case 'unavailable':
        return 'status-unavailable';
      default:
        return '';
    }
  };

  return (
    <div className="property-list-container">
      <h2>Property List</h2>
      <table className="property-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Property Name</th>
            <th>Owner</th>
            <th>Location</th>
            <th>Rent</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.owner}</td>
              <td>{p.location}</td>
              <td>${p.rent?.toFixed(2) || 'N/A'}</td>
              <td>
                <span className={`status-badge ${getStatusClass(p.status)}`}> 
                  {p.status || 'Unknown'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PropertyList;