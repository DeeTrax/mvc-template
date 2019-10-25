INSERT INTO clientele(name, email, password) VALUES('Amy', 'amy@gmail.com', 'password');
INSERT INTO clientele(name, email, password) VALUES('John', 'john@gmail.com', 'password');
INSERT INTO clientele(name, email, password) VALUES('Jane', 'jane@gmail.com', 'password');

INSERT INTO ownedPolicies(clientele_id, policy_number, plan_name, policy_status, premium_frequency, premium, policy_inception_date, coverage_effective_date) VALUES(1, 123, 'MySavingsPlan', 'In-force', 'yearly', 6000.00, '1/2/2010', '1/3/2035');
INSERT INTO ownedPolicies(clientele_id, policy_number, plan_name, policy_status, premium_frequency, premium, policy_inception_date, coverage_effective_date) VALUES(2, 123, 'MySavingsPlan', 'In-force', 'yearly', 6000.00, '1/2/2010', '1/3/2035');
INSERT INTO ownedPolicies(clientele_id, policy_number, plan_name, policy_status, premium_frequency, premium, policy_inception_date, coverage_effective_date) VALUES(3, 123, 'MySavingsPlan', 'In-force', 'yearly', 6000.00, '1/2/2010', '1/3/2035');
