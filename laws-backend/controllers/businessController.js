const Business = require("../models/Business");

exports.createBusiness = async (req, res) => {
  try {
    const businessData = {
      title: req.body.title,
      description: req.body.description,
    };

    if (req.file) {
      businessData.image = req.file.filename;
    }

    if (req.body.permits) {
      try {
        businessData.permits = JSON.parse(req.body.permits);
      } catch (e) {
        return res.status(400).json({ error: "Invalid permits JSON" });
      }
    }

    const business = new Business(businessData);
    await business.save();

    res.status(201).json(business);
  } catch (err) {
    console.error("❌ Create Business Error:", err);
    res.status(400).json({ error: err.message });
  }
};

exports.getBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find();
    res.json(businesses);
  } catch (err) {
    console.error("❌ Get Businesses Error:", err);
    res.status(500).json({ error: err.message });
  }
};

exports.updateBusiness = async (req, res) => {
  try {
    const updateData = {
      title: req.body.title,
      description: req.body.description,
    };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    if (req.body.permits) {
      try {
        updateData.permits = JSON.parse(req.body.permits);
      } catch (e) {
        return res.status(400).json({ error: "Invalid permits JSON" });
      }
    }

    const business = await Business.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!business) {
      return res.status(404).json({ error: "Business not found" });
    }

    res.json(business);
  } catch (err) {
    console.error("❌ Update Business Error:", err);
    res.status(400).json({ error: err.message });
  }
};

exports.deleteBusiness = async (req, res) => {
  try {
    await Business.findByIdAndDelete(req.params.id);
    res.json({ message: "Business deleted" });
  } catch (err) {
    console.error("❌ Delete Business Error:", err);
    res.status(500).json({ error: err.message });
  }
};
