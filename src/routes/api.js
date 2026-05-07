const express = require('express');
const router  = express.Router();

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// Deployment info
router.get('/info', (req, res) => {
  res.json({
    version:     process.env.APP_VERSION || '1.0.0',
    deployedAt:  process.env.DEPLOYED_AT || new Date().toISOString(),
    nodeVersion: process.version,
  });
});

// Sample data
router.get('/data', (req, res) => {
  res.json({
    items:     ['Apple', 'Banana', 'Cherry'],
    total:     3,
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
