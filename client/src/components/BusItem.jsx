import React, { useEffect } from "react";
import { motion } from "framer-motion"; 

const BusItem = ({ bus, handleBusClick }) => {
  return (
    <motion.div
      key={bus.id}
      className="bus-item"
      onClick={() => handleBusClick(bus)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={bus.image_url} alt={bus.route} />
      <h3>{bus.route}</h3>
      <p>Price: {bus.price}</p>
    </motion.div>
  );
};

export default BusItem;
