-- Create database
CREATE DATABASE IF NOT EXISTS pc_builder;
USE pc_builder;

-- Create tables
CREATE TABLE manufacturers (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  logo_url VARCHAR(255)
);

CREATE TABLE processors (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  manufacturer_id VARCHAR(50),
  price DECIMAL(10, 2) NOT NULL,
  socket VARCHAR(50) NOT NULL,
  memory_type VARCHAR(50) NOT NULL,
  cores INT NOT NULL,
  clock_speed DECIMAL(4, 2) NOT NULL,
  FOREIGN KEY (manufacturer_id) REFERENCES manufacturers(id)
);

CREATE TABLE motherboards (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  manufacturer_id VARCHAR(50),
  price DECIMAL(10, 2) NOT NULL,
  socket VARCHAR(50) NOT NULL,
  memory_type VARCHAR(50) NOT NULL,
  chipset VARCHAR(50) NOT NULL,
  form_factor VARCHAR(50) NOT NULL,
  FOREIGN KEY (manufacturer_id) REFERENCES manufacturers(id)
);

CREATE TABLE ram_modules (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  manufacturer_id VARCHAR(50),
  price DECIMAL(10, 2) NOT NULL,
  type VARCHAR(50) NOT NULL,
  capacity INT NOT NULL,
  speed INT NOT NULL,
  FOREIGN KEY (manufacturer_id) REFERENCES manufacturers(id)
);

CREATE TABLE graphics_cards (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  manufacturer_id VARCHAR(50),
  price DECIMAL(10, 2) NOT NULL,
  interface VARCHAR(50) NOT NULL,
  power_requirement INT NOT NULL,
  vram INT NOT NULL,
  FOREIGN KEY (manufacturer_id) REFERENCES manufacturers(id)
);

CREATE TABLE storage_devices (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  manufacturer_id VARCHAR(50),
  price DECIMAL(10, 2) NOT NULL,
  type ENUM('SSD', 'HDD') NOT NULL,
  capacity INT NOT NULL,
  interface ENUM('SATA', 'NVMe') NOT NULL,
  FOREIGN KEY (manufacturer_id) REFERENCES manufacturers(id)
);

CREATE TABLE power_supplies (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  manufacturer_id VARCHAR(50),
  price DECIMAL(10, 2) NOT NULL,
  wattage INT NOT NULL,
  efficiency VARCHAR(50) NOT NULL,
  modular BOOLEAN NOT NULL,
  FOREIGN KEY (manufacturer_id) REFERENCES manufacturers(id)
);

CREATE TABLE cases (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  manufacturer_id VARCHAR(50),
  price DECIMAL(10, 2) NOT NULL,
  max_gpu_length INT NOT NULL,
  FOREIGN KEY (manufacturer_id) REFERENCES manufacturers(id)
);

CREATE TABLE case_form_factors (
  case_id VARCHAR(50),
  form_factor VARCHAR(50),
  PRIMARY KEY (case_id, form_factor),
  FOREIGN KEY (case_id) REFERENCES cases(id)
);