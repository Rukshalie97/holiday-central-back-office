export const fetchFlights = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/flights`);
    if (!response.ok) {
      throw new Error(`Error fetching flights: ${response.statusText}`);
    }
    const data = await response.json();
    return { data, error: null };
  } catch (err) {
    console.error(err);
    return { data: [], error: err.message };
  }
};

export const addFlight = async (flightData) => {
  console.log("this",flightData)
  try {
    const response =  await fetch(`${import.meta.env.VITE_API_URL}/api/flights`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(flightData)
    });
    if (!response.ok) {
      throw new Error(`Error adding flight: ${response.statusText}`);
    }
    const data = await response.json();
    return { data, error: null };
  } catch (err) {
    console.error(err,"kkk");
    return { data: null, error: err.message };
  }
};

export const fetchAirPorts = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/airports`);
    if (!response.ok) {
      throw new Error(`Error fetching flights: ${response.statusText}`);
    }
    const data = await response.json();
    return { data, error: null };
  } catch (err) {
    console.error(err);
    return { data: [], error: err.message };
  }
};


export const fetchAirLines = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/airlines`);
    if (!response.ok) {
      throw new Error(`Error fetching flights: ${response.statusText}`);
    }
    const data = await response.json();
    return { data, error: null };
  } catch (err) {
    console.error(err);
    return { data: [], error: err.message };
  }
};

export const deleteFlight = async (flightId) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/flights/${flightId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Error deleting flight: ${response.statusText}`);
    }

    const data = await response.json();
    return { data, error: null };
  } catch (err) {
    return { data: null, error: err.message };
  }
};

export const fetchAFlights = async (flightId) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/flights/find/${flightId}`);
    if (!response.ok) {
      throw new Error(`Error fetching flights: ${response.statusText}`);
    }
    const data = await response.json();
    return { data, error: null };
  } catch (err) {
    console.error(err);
    return { data: [], error: err.message };
  }
};

export const updateFlight = async (flightId, updatedFlightData) => {
  try {
    const response = await fetch(`/api/${flightId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedFlightData),
    });

    if (!response.ok) {
      throw new Error('Error updating flight');
    }

    const updatedFlight = await response.json();
    console.log('Flight updated successfully:', updatedFlight);
  } catch (error) {
    console.error('Error:', error);
  }
};