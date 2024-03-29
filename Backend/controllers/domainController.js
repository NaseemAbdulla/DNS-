const Domain = require('../models/domainModel');

// Get all domains
exports.getAllDomains = async (req, res) => {
  try {
    const domains = await Domain.find();
    res.json(domains);
    res.json("hello")
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single domain
exports.getDomainById = async (req, res) => {
  try {
    const domain = await Domain.findById(req.params.id);
    if (!domain) {
      return res.status(404).json({ message: 'Domain not found' });
    }
    res.json(domain);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new domain
exports.createDomain = async (req, res) => {
  const domain = new Domain(req.body);
  try {
    const newDomain = await domain.save();
    res.status(201).json(newDomain);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a domain
exports.updateDomain = async (req, res) => {
  try {
    const domain = await Domain.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!domain) {
      return res.status(404).json({ message: 'Domain not found' });
    }
    res.json(domain);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a domain
exports.deleteDomain = async (req, res) => {
  try {
    const domain = await Domain.findByIdAndDelete(req.params.id);
    if (!domain) {
      return res.status(404).json({ message: 'Domain not found' });
    }
    res.json({ message: 'Domain deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
