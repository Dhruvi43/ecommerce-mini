import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import DetailsModalPopup from './DetailsModalPopup';
import { FaThList } from "react-icons/fa";
import { FaTh } from "react-icons/fa";

export default function List({ items, currentView, onToggleCurrentView }) {
  const [modalShow, setModalShow] = useState(false);
  const [editData,setEditData] = useState()
  return (
    <div>
      <div className="product-listing-block">
        <h3>Product List {currentView}</h3>
        <div className="product-icon">
          <div className={currentView === "list" ? "icon active" : "icon"} onClick={()=>onToggleCurrentView("list")}
          type="switch"
          id="show-details"><FaThList /></div>
          <div className={currentView === "grid" ? "icon active" : "icon"} onClick={()=>onToggleCurrentView("grid")}
          type="switch"
          id="show-details"><FaTh /></div>
        </div>
      </div>

      <div className={currentView === "list" ? "list" : "list-grid"}>
        {items.map(item => (
          <div className="list-item" key={item.title}>
            <div className="product-image">
              <img
                src={item.img}
                alt={item.title}
                className="list-item-image"
              />
            </div>
            <div className="product-info">
              <h4>{item.title}</h4>
              <p className="list-item-description">{item.description}</p>
              <div className="price-data">
                  Price - $ <span>{parseFloat(item.price).toFixed(2)}</span>
              </div>
              <Button className="btn-sm" variant="primary" onClick={() => {
                setEditData(item)
                setModalShow(true)
                }}>
                  View Details
              </Button>
            </div>
            <DetailsModalPopup
                show={modalShow}
                onHide={() => setModalShow(false)}
                data = {editData}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
