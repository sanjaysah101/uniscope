-- Comprehensive real university data for Uniscope
-- This script adds extensive real university information from around the world

-- Clear existing data and add comprehensive university dataset
DELETE FROM fee_structures;
DELETE FROM courses;
DELETE FROM universities;

-- Top Global Universities with Real Data
INSERT INTO universities (id, name, description, location, website, established_year, type, accreditation, email, phone) VALUES
-- US Universities
('univ_001', 'Harvard University', 'Oldest institution of higher education in the United States, renowned for academic excellence across all disciplines', 'Cambridge, MA, USA', 'https://harvard.edu', 1636, 'Private', 'NEASC', 'admissions@harvard.edu', '+1-617-495-1000'),
('univ_002', 'Stanford University', 'Leading research university known for innovation, entrepreneurship, and Silicon Valley connections', 'Stanford, CA, USA', 'https://stanford.edu', 1885, 'Private', 'WASC', 'admissions@stanford.edu', '+1-650-723-2300'),
('univ_003', 'MIT', 'Massachusetts Institute of Technology - Premier institution for science, technology, engineering, and mathematics', 'Cambridge, MA, USA', 'https://mit.edu', 1861, 'Private', 'NEASC', 'admissions@mit.edu', '+1-617-253-1000'),
('univ_004', 'UC Berkeley', 'University of California, Berkeley - Top public research university with strong programs across all fields', 'Berkeley, CA, USA', 'https://berkeley.edu', 1868, 'Public', 'WASC', 'admissions@berkeley.edu', '+1-510-642-6000'),
('univ_005', 'Yale University', 'Ivy League institution known for liberal arts education and distinguished alumni', 'New Haven, CT, USA', 'https://yale.edu', 1701, 'Private', 'NEASC', 'admissions@yale.edu', '+1-203-432-4771'),
('univ_006', 'Princeton University', 'Elite private research university with strong undergraduate focus and beautiful campus', 'Princeton, NJ, USA', 'https://princeton.edu', 1746, 'Private', 'MSCHE', 'admissions@princeton.edu', '+1-609-258-3000'),
('univ_007', 'Columbia University', 'Ivy League university in Manhattan known for journalism, business, and research', 'New York, NY, USA', 'https://columbia.edu', 1754, 'Private', 'MSCHE', 'admissions@columbia.edu', '+1-212-854-1754'),
('univ_008', 'University of Chicago', 'Research university known for economics, business, and rigorous academic programs', 'Chicago, IL, USA', 'https://uchicago.edu', 1890, 'Private', 'HLC', 'admissions@uchicago.edu', '+1-773-702-1234'),

-- UK Universities
('univ_009', 'University of Oxford', 'Oldest university in the English-speaking world, renowned for academic excellence and tradition', 'Oxford, England, UK', 'https://ox.ac.uk', 1096, 'Public', 'QAA', 'admissions@ox.ac.uk', '+44-1865-270000'),
('univ_010', 'University of Cambridge', 'Historic university known for scientific research and distinguished alumni including Newton and Hawking', 'Cambridge, England, UK', 'https://cam.ac.uk', 1209, 'Public', 'QAA', 'admissions@cam.ac.uk', '+44-1223-337733'),
('univ_011', 'Imperial College London', 'World-leading university specializing in science, engineering, medicine, and business', 'London, England, UK', 'https://imperial.ac.uk', 1907, 'Public', 'QAA', 'admissions@imperial.ac.uk', '+44-20-7589-5111'),
('univ_012', 'London School of Economics', 'Specialist university focused on social sciences, economics, politics, and law', 'London, England, UK', 'https://lse.ac.uk', 1895, 'Public', 'QAA', 'admissions@lse.ac.uk', '+44-20-7405-7686'),

-- Canadian Universities
('univ_013', 'University of Toronto', 'Canada''s leading research university with three campuses and diverse academic programs', 'Toronto, ON, Canada', 'https://utoronto.ca', 1827, 'Public', 'OUAC', 'admissions@utoronto.ca', '+1-416-978-2011'),
('univ_014', 'McGill University', 'Internationally renowned research university known for medicine and engineering', 'Montreal, QC, Canada', 'https://mcgill.ca', 1821, 'Public', 'MELS', 'admissions@mcgill.ca', '+1-514-398-4455'),

-- Australian Universities
('univ_015', 'University of Melbourne', 'Australia''s leading research university with strong international reputation', 'Melbourne, VIC, Australia', 'https://unimelb.edu.au', 1853, 'Public', 'TEQSA', 'admissions@unimelb.edu.au', '+61-3-9035-5511'),
('univ_016', 'Australian National University', 'National research university known for political science and international relations', 'Canberra, ACT, Australia', 'https://anu.edu.au', 1946, 'Public', 'TEQSA', 'admissions@anu.edu.au', '+61-2-6125-5111'),

-- European Universities
('univ_017', 'ETH Zurich', 'Swiss Federal Institute of Technology known for science, technology, engineering, and mathematics', 'Zurich, Switzerland', 'https://ethz.ch', 1855, 'Public', 'AAQ', 'admissions@ethz.ch', '+41-44-632-1111'),
('univ_018', 'Technical University of Munich', 'Leading technical university in Germany with strong industry connections', 'Munich, Germany', 'https://tum.de', 1868, 'Public', 'ACQUIN', 'admissions@tum.de', '+49-89-289-01'),

-- Asian Universities
('univ_019', 'National University of Singapore', 'Leading research university in Asia with strong global partnerships', 'Singapore', 'https://nus.edu.sg', 1905, 'Public', 'EduTrust', 'admissions@nus.edu.sg', '+65-6516-6666'),
('univ_020', 'University of Tokyo', 'Japan''s most prestigious university known for research and academic excellence', 'Tokyo, Japan', 'https://u-tokyo.ac.jp', 1877, 'Public', 'NIAD-QE', 'admissions@u-tokyo.ac.jp', '+81-3-3812-2111');

-- Comprehensive Course Data
INSERT INTO courses (id, title, description, duration, level, syllabus, university_id) VALUES
-- Computer Science & Technology
('cs_001', 'Computer Science', 'Comprehensive program covering algorithms, software engineering, AI, and machine learning', '4 years', 'Undergraduate', 'Data Structures, Algorithms, Machine Learning, Software Engineering, Computer Systems, Database Systems', 'univ_001'),
('cs_002', 'Computer Science', 'Innovative CS program with emphasis on entrepreneurship and Silicon Valley connections', '4 years', 'Undergraduate', 'Programming, AI/ML, Human-Computer Interaction, Systems Design, Entrepreneurship', 'univ_002'),
('cs_003', 'Electrical Engineering & Computer Science', 'Integrated EECS program combining hardware and software expertise', '4 years', 'Undergraduate', 'Circuit Design, Computer Architecture, Signal Processing, Machine Learning, Robotics', 'univ_003'),
('cs_004', 'Computer Science', 'Strong theoretical foundation with practical applications in research', '4 years', 'Undergraduate', 'Theory of Computation, Algorithms, Systems, AI, Graphics, Security', 'univ_004'),

-- Business & Economics
('bus_001', 'Business Administration (MBA)', 'World-renowned MBA program with case study methodology', '2 years', 'Graduate', 'Strategy, Finance, Marketing, Operations, Leadership, Entrepreneurship', 'univ_001'),
('bus_002', 'Management Science & Engineering', 'Interdisciplinary program combining business and technology', '2 years', 'Graduate', 'Operations Research, Data Analytics, Technology Management, Innovation', 'univ_002'),
('bus_003', 'Economics', 'Rigorous economics program with strong quantitative focus', '4 years', 'Undergraduate', 'Microeconomics, Macroeconomics, Econometrics, Game Theory, Behavioral Economics', 'univ_008'),
('bus_004', 'Economics', 'World-leading economics program with Nobel Prize-winning faculty', '3 years', 'Undergraduate', 'Economic Theory, Econometrics, Development Economics, International Economics', 'univ_012'),

-- Engineering
('eng_001', 'Mechanical Engineering', 'Comprehensive mechanical engineering with focus on innovation', '4 years', 'Undergraduate', 'Thermodynamics, Fluid Mechanics, Materials Science, Design, Manufacturing', 'univ_002'),
('eng_002', 'Biomedical Engineering', 'Interdisciplinary program combining engineering and medicine', '4 years', 'Undergraduate', 'Biomechanics, Medical Devices, Tissue Engineering, Biomedical Imaging', 'univ_003'),
('eng_003', 'Chemical Engineering', 'Process engineering with applications in energy and materials', '4 years', 'Undergraduate', 'Process Design, Reaction Engineering, Transport Phenomena, Process Control', 'univ_003'),

-- Medicine & Life Sciences
('med_001', 'Medicine', 'Prestigious medical program with world-class clinical training', '4 years', 'Graduate', 'Anatomy, Physiology, Pathology, Clinical Medicine, Surgery, Internal Medicine', 'univ_001'),
('med_002', 'Medicine', 'Innovative medical curriculum with early clinical exposure', '6 years', 'Undergraduate', 'Basic Sciences, Clinical Skills, Research Methods, Medical Ethics, Specialization', 'univ_009'),
('med_003', 'Biomedical Sciences', 'Research-focused program in biological and medical sciences', '4 years', 'Undergraduate', 'Molecular Biology, Genetics, Biochemistry, Immunology, Neuroscience', 'univ_010'),

-- Liberal Arts & Humanities
('lib_001', 'Philosophy, Politics & Economics (PPE)', 'Prestigious interdisciplinary program combining three key fields', '3 years', 'Undergraduate', 'Political Theory, Economic Analysis, Philosophical Methods, Ethics, Logic', 'univ_009'),
('lib_002', 'History', 'Comprehensive history program with global perspective', '4 years', 'Undergraduate', 'World History, Research Methods, Historical Analysis, Historiography', 'univ_005'),
('lib_003', 'English Literature', 'Classical literature program with modern critical approaches', '3 years', 'Undergraduate', 'Literary Analysis, Creative Writing, Literary Theory, Comparative Literature', 'univ_010'),

-- International Programs
('int_001', 'International Relations', 'Global affairs program with diplomatic and policy focus', '4 years', 'Undergraduate', 'International Law, Diplomacy, Global Economics, Security Studies, Regional Studies', 'univ_007'),
('int_002', 'International Business', 'Global business program with multicultural perspective', '4 years', 'Undergraduate', 'Global Strategy, Cross-cultural Management, International Finance, Trade Policy', 'univ_013'),

-- Science & Mathematics
('sci_001', 'Physics', 'Theoretical and experimental physics with cutting-edge research', '4 years', 'Undergraduate', 'Classical Mechanics, Quantum Physics, Thermodynamics, Electromagnetism, Modern Physics', 'univ_003'),
('sci_002', 'Mathematics', 'Pure and applied mathematics with strong theoretical foundation', '4 years', 'Undergraduate', 'Calculus, Linear Algebra, Abstract Algebra, Real Analysis, Topology, Statistics', 'univ_006'),
('sci_003', 'Chemistry', 'Comprehensive chemistry program with research opportunities', '4 years', 'Undergraduate', 'Organic Chemistry, Inorganic Chemistry, Physical Chemistry, Analytical Chemistry', 'univ_004');

-- Realistic Fee Structures (in USD for consistency)
INSERT INTO fee_structures (id, academic_year, tuition_fee, other_fees, total_fee, currency, university_id, course_id) VALUES
-- US Private Universities (High fees)
('fee_001', '2024-2025', 54269, 4000, 58269, 'USD', 'univ_001', 'cs_001'),
('fee_002', '2024-2025', 54269, 4000, 58269, 'USD', 'univ_001', 'bus_001'),
('fee_003', '2024-2025', 54269, 4000, 58269, 'USD', 'univ_001', 'med_001'),
('fee_004', '2024-2025', 58416, 3500, 61916, 'USD', 'univ_002', 'cs_002'),
('fee_005', '2024-2025', 58416, 3500, 61916, 'USD', 'univ_002', 'bus_002'),
('fee_006', '2024-2025', 58416, 3500, 61916, 'USD', 'univ_002', 'eng_001'),
('fee_007', '2024-2025', 57986, 3200, 61186, 'USD', 'univ_003', 'cs_003'),
('fee_008', '2024-2025', 57986, 3200, 61186, 'USD', 'univ_003', 'eng_002'),
('fee_009', '2024-2025', 57986, 3200, 61186, 'USD', 'univ_003', 'eng_003'),

-- US Public Universities (Lower fees for residents)
('fee_010', '2024-2025', 14254, 2000, 16254, 'USD', 'univ_004', 'cs_004'),
('fee_011', '2024-2025', 14254, 2000, 16254, 'USD', 'univ_004', 'sci_003'),

-- Ivy League
('fee_012', '2024-2025', 62250, 4500, 66750, 'USD', 'univ_005', 'lib_002'),
('fee_013', '2024-2025', 59710, 4200, 63910, 'USD', 'univ_006', 'sci_002'),
('fee_014', '2024-2025', 66139, 4800, 70939, 'USD', 'univ_007', 'int_001'),
('fee_015', '2024-2025', 64965, 4300, 69265, 'USD', 'univ_008', 'bus_003'),

-- UK Universities (Lower fees, converted to USD)
('fee_016', '2024-2025', 12500, 1500, 14000, 'USD', 'univ_009', 'lib_001'),
('fee_017', '2024-2025', 12500, 1500, 14000, 'USD', 'univ_009', 'med_002'),
('fee_018', '2024-2025', 12500, 1500, 14000, 'USD', 'univ_010', 'med_003'),
('fee_019', '2024-2025', 12500, 1500, 14000, 'USD', 'univ_010', 'lib_003'),
('fee_020', '2024-2025', 15000, 2000, 17000, 'USD', 'univ_011', 'eng_002'),
('fee_021', '2024-2025', 13500, 1800, 15300, 'USD', 'univ_012', 'bus_004'),

-- Canadian Universities (Moderate fees)
('fee_022', '2024-2025', 8000, 1200, 9200, 'USD', 'univ_013', 'int_002'),
('fee_023', '2024-2025', 7500, 1100, 8600, 'USD', 'univ_014', 'med_001'),

-- Australian Universities
('fee_024', '2024-2025', 25000, 2500, 27500, 'USD', 'univ_015', 'cs_001'),
('fee_025', '2024-2025', 22000, 2200, 24200, 'USD', 'univ_016', 'int_001'),

-- European Universities (Very affordable)
('fee_026', '2024-2025', 1500, 800, 2300, 'USD', 'univ_017', 'eng_001'),
('fee_027', '2024-2025', 0, 500, 500, 'USD', 'univ_018', 'eng_002'),

-- Asian Universities (Moderate fees)
('fee_028', '2024-2025', 18000, 2000, 20000, 'USD', 'univ_019', 'cs_001'),
('fee_029', '2024-2025', 5000, 1000, 6000, 'USD', 'univ_020', 'sci_001');

-- Sample Reviews for realistic data
INSERT INTO reviews (id, rating, comment, user_id, university_id, course_id, created_at) VALUES
('rev_001', 5, 'Exceptional computer science program with world-class faculty and amazing research opportunities. The Silicon Valley connections are invaluable for career prospects.', 'user_1', 'univ_002', 'cs_002', NOW()),
('rev_002', 4, 'Rigorous academic environment at MIT. The EECS program is challenging but incredibly rewarding. Great preparation for both industry and research careers.', 'user_2', 'univ_003', 'cs_003', NOW()),
('rev_003', 5, 'Harvard''s CS program has evolved tremendously. Great balance of theory and practical applications. The alumni network is unmatched.', 'user_3', 'univ_001', 'cs_001', NOW()),
('rev_004', 4, 'Oxford''s PPE program is intellectually stimulating and provides excellent preparation for careers in politics, consulting, and academia.', 'user_4', 'univ_009', 'lib_001', NOW()),
('rev_005', 5, 'Cambridge medicine is incredibly competitive but the clinical training is world-class. The collegiate system provides great support.', 'user_5', 'univ_010', 'med_003', NOW()),
('rev_006', 4, 'UC Berkeley offers excellent value for a top-tier education. The research opportunities are abundant and the campus culture is vibrant.', 'user_6', 'univ_004', 'cs_004', NOW()),
('rev_007', 5, 'ETH Zurich provides world-class engineering education at an incredibly affordable price. The research facilities are state-of-the-art.', 'user_7', 'univ_017', 'eng_001', NOW()),
('rev_008', 4, 'NUS has rapidly risen in global rankings. Great international exposure and strong industry connections in Asia-Pacific region.', 'user_8', 'univ_019', 'cs_001', NOW());

-- Sample Posts for Community Feed
INSERT INTO posts (id, title, content, type, user_id, university_id, created_at, likes_count, comments_count) VALUES
('post_001', 'Stanford CS Admission Tips', 'Just got accepted to Stanford CS! Here are some tips that helped me: 1) Strong math background is crucial 2) Show genuine passion for CS through projects 3) Research experience helps a lot. Happy to answer questions!', 'blog', 'user_1', 'univ_002', NOW(), 45, 12),
('post_002', 'MIT vs Caltech for Engineering', 'Trying to decide between MIT and Caltech for mechanical engineering. Both have amazing programs but very different cultures. MIT seems more collaborative while Caltech is more research-focused. Thoughts?', 'question', 'user_2', 'univ_003', NOW(), 23, 8),
('post_003', 'Oxford Interview Experience', 'Just finished my Oxford PPE interview! It was intense but fascinating. They really test your ability to think on your feet and defend your arguments. The tutors were brilliant and challenging.', 'experience', 'user_4', 'univ_009', NOW(), 67, 15),
('post_004', 'Free Resources for SAT Prep', 'Compiled a list of free SAT prep resources that helped me score 1580: Khan Academy (obviously), College Board practice tests, UWorld for math practice, and Erica Meltzer books for reading. All available online!', 'resource', 'user_3', NULL, NOW(), 89, 22),
('post_005', 'Cambridge vs Harvard for Medicine', 'Accepted to both Cambridge and Harvard for medicine. Cambridge is 6 years vs Harvard''s 4+4 system. Cambridge is much cheaper but Harvard has better research opportunities. Such a difficult choice!', 'question', 'user_5', 'univ_010', NOW(), 34, 18);
