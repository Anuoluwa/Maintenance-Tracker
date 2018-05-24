DROP DATABASE IF EXISTS maintenanceTracker;
CREATE DATABASE maintenanceTracker;

\c maintenanceTracker;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  email VARCHAR NOT NULL,
  passowrd VARCHAR NOT NULL,
  create_date date DEFAULT ('now'::text)::date NOT NULL,
  last_update timestamp without time zone DEFAULT now(),
);

CREATE TABLE requests (
    request_id SERIAL PRIMARY KEY DEFAULT  NOT NULL,
    user_id smallint NOT NULL,
    title character varying(45) NOT NULL,
    description text NOT NULL,
    department character varying(45) NOT NULL,
    location character varying(45) NOT NULL,
    create_date date DEFAULT ('now'::text)::date NOT NULL,
    last_update timestamp without time zone DEFAULT now(),
    active integer
);

CREATE TABLE statuses (
    status_id SERIAL PRIMARY KEY  NOT NULL,
    title character varying(45) NOT NULL,
    create_date date DEFAULT ('now'::text)::date NOT NULL,
    last_update timestamp without time zone DEFAULT now() NOT NULL,
);
