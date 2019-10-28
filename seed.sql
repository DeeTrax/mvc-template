INSERT INTO clientele(name, email, password) VALUES('Amy', 'amy@gmail.com', 'password');
INSERT INTO clientele(name, email, password) VALUES('Brian', 'brian@gmail.com', 'password');
INSERT INTO clientele(name, email, password) VALUES('Catherine', 'catherine@gmail.com', 'password');
INSERT INTO clientele(name, email, password) VALUES('Esmer', 'esmer@gmail.com', 'password');
INSERT INTO clientele(name, email, password) VALUES('Dan', 'dan@gmail.com', 'password');

INSERT INTO ownedPolicies(clientele_id, policy_number, plan_name, policy_status, premium_frequency, premium, policy_inception_date, coverage_effective_date) VALUES(1, 1234, 'MySavingsPlan', 'In-force', 'Yearly', 6000.00, '2/17/2010', '1/3/2035');
INSERT INTO ownedPolicies(clientele_id, policy_number, plan_name, policy_status, premium_frequency, premium, policy_inception_date, coverage_effective_date) VALUES(2, 2345, 'MyHospitalPlan', 'In-force', 'Yearly', 560.60, '4/8/2009', '1/6/2055');
INSERT INTO ownedPolicies(clientele_id, policy_number, plan_name, policy_status, premium_frequency, premium, policy_inception_date, coverage_effective_date) VALUES(3, 3456, 'MyRetirementPlan', 'In-force', 'Half-yearly', 12000.00, '3/23/2000', '1/9/2025');
INSERT INTO ownedPolicies(clientele_id, policy_number, plan_name, policy_status, premium_frequency, premium, policy_inception_date, coverage_effective_date) VALUES(4, 4567, 'MySavingsPlan', 'In-force', 'Yearly', 3000.00, '8/2/2007', '1/12/2027');
INSERT INTO ownedPolicies(clientele_id, policy_number, plan_name, policy_status, premium_frequency, premium, policy_inception_date, coverage_effective_date) VALUES(5, 5678, 'MyRetiremenPlan', 'In-force', 'Yearly', 9600.00, '12/12/2010', '1/8/2035');
INSERT INTO ownedPolicies(clientele_id, policy_number, plan_name, policy_status, premium_frequency, premium, policy_inception_date, coverage_effective_date) VALUES(4, 6789, 'MyHospitalPlan', 'In-force', 'Yearly', 1230.20, '8/10/1995', '1/8/2040');
INSERT INTO ownedPolicies(clientele_id, policy_number, plan_name, policy_status, premium_frequency, premium, policy_inception_date, coverage_effective_date) VALUES(2, 7890, 'MySavingsPlan', 'In-force', 'Half-yearly', 3600.00, '4/14/2015', '1/2/2030');
INSERT INTO ownedPolicies(clientele_id, policy_number, plan_name, policy_status, premium_frequency, premium, policy_inception_date, coverage_effective_date) VALUES(3, 9876, 'MySavingsPlan', 'In-force', 'Monthly', 6000.00, '8/20/2000', '1/3/2025');
INSERT INTO ownedPolicies(clientele_id, policy_number, plan_name, policy_status, premium_frequency, premium, policy_inception_date, coverage_effective_date) VALUES(2, 8765, 'CriticalIllnessPlan', 'In-force', 'Half-yearly', 2573.90, '7/20/2015', '1/4/2048');
