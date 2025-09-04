-- Initial database setup script for Uniscope
-- This script will create the initial tables and seed some sample data

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Sample Universities
INSERT INTO universities (id, name, description, location, website, established_year, type, accreditation, email, phone) VALUES
('univ_1', 'Stanford University', 'A leading research university known for innovation and entrepreneurship', 'Stanford, CA, USA', 'https://stanford.edu', 1885, 'Private', 'WASC', 'admissions@stanford.edu', '+1-650-723-2300'),
('univ_2', 'MIT', 'Massachusetts Institute of Technology - Premier institution for science and technology', 'Cambridge, MA, USA', 'https://mit.edu', 1861, 'Private', 'NEASC', 'admissions@mit.edu', '+1-617-253-1000'),
('univ_3', 'UC Berkeley', 'University of California, Berkeley - Top public research university', 'Berkeley, CA, USA', 'https://berkeley.edu', 1868, 'Public', 'WASC', 'admissions@berkeley.edu', '+1-510-642-6000');

-- Sample Courses
INSERT INTO courses (id, title, description, duration, level, syllabus, university_id) VALUES
('course_1', 'Computer Science', 'Comprehensive program covering algorithms, software engineering, and AI', '4 years', 'Undergraduate', 'Data Structures, Algorithms, Machine Learning, Software Engineering', 'univ_1'),
('course_2', 'Electrical Engineering', 'Advanced program in electrical systems and computer engineering', '4 years', 'Undergraduate', 'Circuit Analysis, Digital Systems, Signal Processing, Control Systems', 'univ_2'),
('course_3', 'Business Administration', 'MBA program focusing on leadership and innovation', '2 years', 'Graduate', 'Strategy, Finance, Marketing, Operations, Leadership', 'univ_3');

-- Sample Fee Structures
INSERT INTO fee_structures (id, academic_year, tuition_fee, other_fees, total_fee, currency, university_id, course_id) VALUES
('fee_1', '2024-2025', 58416, 2000, 60416, 'USD', 'univ_1', 'course_1'),
('fee_2', '2024-2025', 57986, 1500, 59486, 'USD', 'univ_2', 'course_2'),
('fee_3', '2024-2025', 14254, 1000, 15254, 'USD', 'univ_3', 'course_3');
