import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import embed from './configure';
import connect from './connect';

const nebulaPromise = async () => {
  const app = await connect({
    webIntegrationId: 'N_w0aC9A8B-nIaDOs7vhelmOoSE6_oWA',
    url: 'https://vn2k34xveisr2i6.ap.qlikcloud.com',
    appId: 'bfe1ca84-df3d-44f8-9ac3-b3ccc9c63b7e',
  });
  console.log("APP : ",app)
  return embed(app);
};
const GlobalValuesProvider = ({ children }) => {
  const [nebula, setNebula] = useState(null);

  const init = async () => {
    const _nebula = await nebulaPromise();
    setNebula(_nebula);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Context.Provider value={{
      nebula,
    }}
    >
      {children}
    </Context.Provider>
  );
};

GlobalValuesProvider.propTypes = {
  children: PropTypes.array.isRequired,
};
GlobalValuesProvider.defaultProps = [];

export default GlobalValuesProvider;
