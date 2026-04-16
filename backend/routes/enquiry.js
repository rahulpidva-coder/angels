const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/enquiry', async (req, res) => {
  try {
    const {
      enquiryType,
      parentName,
      childName,
      mobile,
      email,
      ageGroup,
      suggestedProgram,
      message,
      consent,
      source
    } = req.body;

    const cleanedMobile = String(mobile || '').replace(/\D/g, '');

    if (!cleanedMobile || cleanedMobile.length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Invalid mobile number'
      });
    }

    const safeType = enquiryType || 'admission';

    const sql = `
      INSERT INTO ang_tbl_enquiries
      (
        enquiry_type,
        parent_name,
        child_name,
        mobile,
        email,
        age_group,
        suggested_program,
        message,
        consent_whatsapp,
        source
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
        enquiry_type = VALUES(enquiry_type),
        parent_name = VALUES(parent_name),
        child_name = VALUES(child_name),
        email = VALUES(email),
        age_group = VALUES(age_group),
        suggested_program = VALUES(suggested_program),
        message = VALUES(message),
        consent_whatsapp = VALUES(consent_whatsapp),
        source = VALUES(source),
        updated_at = CURRENT_TIMESTAMP
    `;

    const values = [
      safeType,
      parentName || null,
      childName || null,
      cleanedMobile,
      email || null,
      ageGroup || null,
      suggestedProgram || null,
      message || null,
      consent ? 1 : 0,
      source || 'website'
    ];

    const [result] = await db.query(sql, values);

    return res.status(200).json({
      success: true,
      duplicate: result.affectedRows === 2,
      message:
        result.affectedRows === 2
          ? 'Existing enquiry updated successfully'
          : 'Enquiry saved successfully'
    });
  } catch (error) {
    console.error('Enquiry API Error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Server error'
    });
  }
});

module.exports = router;