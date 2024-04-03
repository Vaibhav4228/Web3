// import React, { useState, useEffect } from 'react'

// import { DisplayCampaigns } from '../components';
// import { useStateContext } from '../context'

// const Home = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [campaigns, setCampaigns] = useState([]);

//   const { address, contract, getCampaigns } = useStateContext();

//   const fetchCampaigns = async () => {
//     setIsLoading(true);
//     const data = await getCampaigns();
//     setCampaigns(data);
//     setIsLoading(false);
//   }

//   useEffect(() => {
//     if(contract) fetchCampaigns();
//   }, [address, contract]);

//   return (
//     <DisplayCampaigns 
//       title="All Campaigns"
//       isLoading={isLoading}
//       campaigns={campaigns}
//     />
//   )
// }

// export default Home

import React, { useState, useEffect } from 'react';
import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    try {
      const data = await getCampaigns();
      setCampaigns(data);
    } catch (error) {
      console.error('Error fetching campaigns:', error);
      // Handle error, e.g., set an error state
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (contract) {
      fetchCampaigns();
    }
  }, [address, contract]);

  return (
    <>
      {contract ? (
        <DisplayCampaigns
          title="All Campaigns"
          isLoading={isLoading}
          campaigns={campaigns}
        />
      ) : (
        <p>Loading...</p> // or any other loading indicator
      )}
    </>
  );
};

export default Home;
