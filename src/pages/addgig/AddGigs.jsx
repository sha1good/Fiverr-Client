import "./AddGigs.scss";
import React from "react";

const AddGigs = () => {
  return (
    <div className="addGig">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="e.g. I will do something I'm really good at"
            />
            <label htmlFor="category">Category</label>
            <select name="cats" id="category">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor="coverImg">Cover Image</label>
            <input type="file" id="coverImg" />
            <label htmlFor="uploadImg">Upload Images</label>
            <input type="file" id="uploadImg" multiple />
            <label htmlFor="description">Description</label>
            <textarea
              name="desc"
              id="description"
              placeholder="Brief descriptions to introduce your service to customers"
              cols="0"
              rows="16"
            />
            <button>Create</button>
          </div>
          <div className="right">
            <label htmlFor="sTitle">Service Title</label>
            <input type="text" placeholder="e.g. One-page web design" />
            <label htmlFor="sDesc">Short Description</label>
            <textarea
              name="sDesc"
              placeholder="Short description of your service"
              cols="30"
              rows="10"
            />
            <label htmlFor="dTime">Delivery Time (e.g. 3 days)</label>
            <input type="number" />
            <label htmlFor="rNumber">Revision Number</label>
            <input type="number" />
            <label htmlFor="addFeatures">Add Features</label>
            <input type="text" placeholder="e.g. page design" />
            <input type="text" placeholder="e.g. file uploading" />
            <input type="text" placeholder="e.g. setting up a domain" />
            <input type="text" placeholder="e.g. hosting" />
            <label htmlFor="price">Price</label>
            <input type="number" id="price" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGigs;
