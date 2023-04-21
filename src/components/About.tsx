import React from "react";

type aboutProps = {
  address: string;
  tenant: number;
  request: number;
};

const About = ({ address, tenant, request }: aboutProps) => {
  return (
    <div>
      <p>address:{address}</p>
      <p>tenant:{tenant}</p>
      <p>request:{request}</p>
    </div>
  );
};

export default About;
