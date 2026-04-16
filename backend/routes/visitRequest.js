const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/visit-request', async (req, res) => {
  try {
    const {
      parentName,
      mobile,
      preferredSlot,
      source
    } = req.body;

    const cleanedMobile = String(mobile || '').replace(/\D/g, '');

    if (!parentName || !parentName.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Parent name is required'
      });
    }

    if (!cleanedMobile || cleanedMobile.length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Invalid mobile number'
      });
    }

    if (!preferredSlot) {
      return res.status(400).json({
        success: false,
        message: 'Preferred slot is required'
      });
    }

    const sql = `
      INSERT INTO ang_tbl_visit_requests
      (
        parent_name,
        mobile,
        preferred_slot,
        source
      )
      VALUES (?, ?, ?, ?)
    `;

    await db.query(sql, [
      parentName.trim(),
      cleanedMobile,
      preferredSlot,
      source || 'website'
    ]);

    return res.status(200).json({
      success: true,
      message: 'Visit request saved successfully'
    });
  } catch (error) {
    console.error('Visit Request API Error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Server error'
    });
  }
});

module.exports = router;