-- Insert manufacturers
INSERT INTO manufacturers (id, name, logo_url) VALUES
('intel', 'Intel', 'https://example.com/intel-logo.png'),
('amd', 'AMD', 'https://example.com/amd-logo.png'),
('asus', 'ASUS', 'https://example.com/asus-logo.png'),
('msi', 'MSI', 'https://example.com/msi-logo.png'),
('gigabyte', 'Gigabyte', 'https://example.com/gigabyte-logo.png'),
('corsair', 'Corsair', 'https://example.com/corsair-logo.png');

-- Insert processors
INSERT INTO processors (id, name, manufacturer_id, price, socket, memory_type, cores, clock_speed) VALUES
('intel-i9-13900k', 'Intel Core i9-13900K', 'intel', 589.99, 'LGA1700', 'DDR5', 24, 5.8),
('intel-i7-13700k', 'Intel Core i7-13700K', 'intel', 409.99, 'LGA1700', 'DDR5', 16, 5.4),
('intel-i5-13600k', 'Intel Core i5-13600K', 'intel', 319.99, 'LGA1700', 'DDR5', 14, 5.1),
('amd-7950x', 'AMD Ryzen 9 7950X', 'amd', 549.99, 'AM5', 'DDR5', 16, 5.7),
('amd-7900x', 'AMD Ryzen 9 7900X', 'amd', 449.99, 'AM5', 'DDR5', 12, 5.6),
('amd-7700x', 'AMD Ryzen 7 7700X', 'amd', 349.99, 'AM5', 'DDR5', 8, 5.4);