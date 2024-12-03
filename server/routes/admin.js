import express from 'express';
import pool from '../config/db.js';

const router = express.Router();

// Get all components of a specific type
router.get('/:componentType', async (req, res) => {
  try {
    const { componentType } = req.params;
    const [rows] = await pool.query(`SELECT * FROM ${componentType}`);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new component
router.post('/:componentType', async (req, res) => {
  try {
    const { componentType } = req.params;
    const component = req.body;
    
    const columns = Object.keys(component).join(', ');
    const values = Object.values(component);
    const placeholders = values.map(() => '?').join(', ');
    
    const [result] = await pool.query(
      `INSERT INTO ${componentType} (${columns}) VALUES (${placeholders})`,
      values
    );
    
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a component
router.put('/:componentType/:id', async (req, res) => {
  try {
    const { componentType, id } = req.params;
    const updates = req.body;
    
    const setClause = Object.keys(updates)
      .map(key => `${key} = ?`)
      .join(', ');
    
    await pool.query(
      `UPDATE ${componentType} SET ${setClause} WHERE id = ?`,
      [...Object.values(updates), id]
    );
    
    res.json({ message: 'Updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a component
router.delete('/:componentType/:id', async (req, res) => {
  try {
    const { componentType, id } = req.params;
    await pool.query(`DELETE FROM ${componentType} WHERE id = ?`, [id]);
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;