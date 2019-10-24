CREATE TABLE IF NOT EXISTS clientele (
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS ownedPolicies (
    id SERIAL PRIMARY KEY,
    clientele_id INTEGER,
    policy_number INTEGER,
    plan_name TEXT,
    policy_status TEXT,
    premium_frequency TEXT,
    premium FLOAT,
    policy_inception_date DATE,
    coverage_effective_date DATE
);


