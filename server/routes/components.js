import express from 'express';
import pool from '../config/db.js';

const router = express.Router();

// Get all components of a specific type
router.get('/:componentType', async (req, res) => {
  try {
    const { componentType } = req.params;
    const validTables = [
      'processors',
      'motherboards',
      'ram_modules',
      'graphics_cards',
      'storage_devices',
      'power_supplies',
      'cases'
    ];

    if (!validTables.includes(componentType)) {
      return res.status(400).json({ error: 'Invalid component type' });
    }

    const [rows] = await pool.query(
      `SELECT c.*, m.name as manufacturer_name 
       FROM ${componentType} c 
       LEFT JOIN manufacturers m ON c.manufacturer_id = m.id`
    );
    res.json(rows);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;