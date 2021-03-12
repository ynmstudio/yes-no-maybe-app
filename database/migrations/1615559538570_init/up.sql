CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE TABLE public.applications (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name text,
    edition_id integer NOT NULL,
    created_by text NOT NULL,
    "group" boolean DEFAULT false NOT NULL,
    statement text,
    residency boolean DEFAULT false NOT NULL,
    database boolean DEFAULT false NOT NULL,
    disclaimer boolean DEFAULT false NOT NULL,
    internal_name text,
    locked boolean DEFAULT false NOT NULL,
    eliminated boolean DEFAULT false NOT NULL
);
CREATE TABLE public.editions (
    id integer NOT NULL,
    name text NOT NULL,
    current boolean,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    application_start timestamp with time zone DEFAULT (now() + '1 day'::interval day) NOT NULL,
    application_end timestamp with time zone DEFAULT (now() + '2 days'::interval day) NOT NULL,
    winner_id uuid,
    CONSTRAINT application_end_after_start CHECK ((application_start < application_end)),
    CONSTRAINT application_starts_in_future CHECK ((created_at < application_start))
);

CREATE TABLE public.rating_rounds (
    id integer NOT NULL,
    start_at timestamp with time zone DEFAULT (now() + '01:00:00'::interval hour) NOT NULL,
    end_at timestamp with time zone DEFAULT (now() + '1 day'::interval day) NOT NULL,
    edition_id integer NOT NULL,
    goal integer NOT NULL,
    prev_round_id integer,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    CONSTRAINT goal_must_be_greater_than_zero CHECK ((goal > 0)),
    CONSTRAINT rating_start_in_future CHECK ((start_at > created_at)),
    CONSTRAINT rating_starts_before_end CHECK ((start_at < end_at))
);
CREATE FUNCTION public.rating_round_state(round_row public.rating_rounds) RETURNS boolean
    LANGUAGE sql STABLE
    AS $$
  SELECT round_row.start_at <= now() AND round_row.end_at >= now()
$$;
CREATE FUNCTION public.search_applications(search text) RETURNS SETOF public.applications
    LANGUAGE sql STABLE
    AS $$ 
SELECT   * 
FROM     applications 
WHERE    search <% ( INTERNAL_NAME ) 
ORDER BY similarity(search, ( INTERNAL_NAME )) DESC limit 5; 
$$;
CREATE FUNCTION public.set_current_timestamp_last_seen() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."last_seen" = NOW();
  RETURN _new;
END;
$$;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.category_mediums (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name_en text NOT NULL,
    name_de text NOT NULL
);
CREATE TABLE public.category_tags (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name_en text NOT NULL,
    name_de text NOT NULL
);
CREATE SEQUENCE public.editions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.editions_id_seq OWNED BY public.editions.id;
CREATE TABLE public.eliminations (
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    application_id uuid NOT NULL,
    round_id integer,
    reason text,
    created_by text NOT NULL,
    id integer NOT NULL
);
CREATE SEQUENCE public.eliminations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.eliminations_id_seq OWNED BY public.eliminations.id;
CREATE TABLE public.messages (
    id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    created_by text NOT NULL,
    text text NOT NULL,
    round_id integer,
    application_id uuid NOT NULL
);
CREATE SEQUENCE public.messages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.messages_id_seq OWNED BY public.messages.id;
CREATE TABLE public.payments (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    key text NOT NULL,
    mimetype text NOT NULL,
    originalname text NOT NULL,
    application_id uuid NOT NULL,
    size numeric NOT NULL
);
CREATE SEQUENCE public.rating_rounds_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.rating_rounds_id_seq OWNED BY public.rating_rounds.id;
CREATE VIEW public.rating_rounds_sorted AS
 WITH RECURSIVE starting AS (
         SELECT rating_rounds.id,
            rating_rounds.edition_id,
            rating_rounds.prev_round_id,
            0 AS level,
            rating_rounds.start_at,
            rating_rounds.end_at,
            rating_rounds.goal
           FROM public.rating_rounds
          WHERE (rating_rounds.prev_round_id IS NULL)
        UNION ALL
         SELECT rr.id,
            rr.edition_id,
            rr.prev_round_id,
            (s.level + 1),
            rr.start_at,
            rr.end_at,
            rr.goal
           FROM (starting s
             JOIN public.rating_rounds rr ON (((s.id = rr.prev_round_id) AND (s.edition_id = rr.edition_id))))
        )
 SELECT starting.id,
    starting.edition_id,
    starting.prev_round_id,
    starting.level,
    starting.start_at,
    starting.end_at,
    starting.goal
   FROM starting
  ORDER BY starting.edition_id, starting.level;
CREATE TABLE public.ratings (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    round_id integer NOT NULL,
    application_id uuid NOT NULL,
    created_by text NOT NULL,
    value integer NOT NULL,
    message_id integer NOT NULL,
    CONSTRAINT rating_value_constraint CHECK (((value >= 0) AND (value <= 10)))
);
CREATE VIEW public.ratings_by_application AS
SELECT
    NULL::uuid AS id,
    NULL::integer AS edition_id,
    NULL::integer AS round_id,
    NULL::bigint AS count,
    NULL::numeric AS avg,
    NULL::numeric AS avg_total;
CREATE TABLE public.updates (
    id integer NOT NULL,
    url text,
    edition_id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    text_en text,
    text_de text
);
CREATE SEQUENCE public.updates_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.updates_id_seq OWNED BY public.updates.id;
CREATE TABLE public.users (
    id text NOT NULL,
    type text NOT NULL,
    name text,
    last_seen timestamp with time zone DEFAULT now()
);
CREATE VIEW public.users_online AS
 SELECT users.id,
    users.name,
    users.last_seen,
    users.type
   FROM public.users
  WHERE (users.last_seen > (now() - '00:01:00'::interval));
CREATE TABLE public.wordlist (
    value text NOT NULL,
    id integer NOT NULL
);
CREATE SEQUENCE public.wordlist_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.wordlist_id_seq OWNED BY public.wordlist.id;
CREATE TABLE public.work_files (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    key text NOT NULL,
    mimetype text NOT NULL,
    originalname text NOT NULL,
    work_id uuid NOT NULL,
    "order" integer NOT NULL,
    application_id uuid NOT NULL,
    size numeric NOT NULL
);
CREATE TABLE public.work_specification_mediums (
    specification_id uuid NOT NULL,
    medium_id uuid NOT NULL
);
CREATE TABLE public.work_specification_tags (
    specification_id uuid NOT NULL,
    tag_id uuid NOT NULL
);
CREATE TABLE public.work_specifications (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    work_id uuid NOT NULL,
    "order" integer,
    title text,
    number_of_editions integer,
    material text,
    dimensions_height integer,
    dimensions_width integer,
    dimensions_depth integer,
    description text,
    application_id uuid NOT NULL,
    year text,
    video_url text,
    video_password text
);
CREATE TABLE public.works (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    application_id uuid NOT NULL,
    portfolio boolean,
    "order" numeric,
    video_url text,
    video_password text
);
ALTER TABLE ONLY public.editions ALTER COLUMN id SET DEFAULT nextval('public.editions_id_seq'::regclass);
ALTER TABLE ONLY public.eliminations ALTER COLUMN id SET DEFAULT nextval('public.eliminations_id_seq'::regclass);
ALTER TABLE ONLY public.messages ALTER COLUMN id SET DEFAULT nextval('public.messages_id_seq'::regclass);
ALTER TABLE ONLY public.rating_rounds ALTER COLUMN id SET DEFAULT nextval('public.rating_rounds_id_seq'::regclass);
ALTER TABLE ONLY public.updates ALTER COLUMN id SET DEFAULT nextval('public.updates_id_seq'::regclass);
ALTER TABLE ONLY public.wordlist ALTER COLUMN id SET DEFAULT nextval('public.wordlist_id_seq'::regclass);
ALTER TABLE ONLY public.applications
    ADD CONSTRAINT applications_edition_id_internal_name_key UNIQUE (edition_id, internal_name);
ALTER TABLE ONLY public.applications
    ADD CONSTRAINT applications_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.category_mediums
    ADD CONSTRAINT category_mediums_name_de_key UNIQUE (name_de);
ALTER TABLE ONLY public.category_mediums
    ADD CONSTRAINT category_mediums_name_en_key UNIQUE (name_en);
ALTER TABLE ONLY public.category_mediums
    ADD CONSTRAINT category_mediums_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.category_tags
    ADD CONSTRAINT category_tags_name_de_key UNIQUE (name_de);
ALTER TABLE ONLY public.category_tags
    ADD CONSTRAINT category_tags_name_en_key UNIQUE (name_en);
ALTER TABLE ONLY public.category_tags
    ADD CONSTRAINT category_tags_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.editions
    ADD CONSTRAINT editions_current_key UNIQUE (current);
ALTER TABLE ONLY public.editions
    ADD CONSTRAINT editions_name_key UNIQUE (name);
ALTER TABLE ONLY public.editions
    ADD CONSTRAINT editions_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.eliminations
    ADD CONSTRAINT eliminations_application_id_key UNIQUE (application_id);
ALTER TABLE ONLY public.eliminations
    ADD CONSTRAINT eliminations_id_key UNIQUE (id);
ALTER TABLE ONLY public.eliminations
    ADD CONSTRAINT eliminations_pkey PRIMARY KEY (application_id);
ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.payments
    ADD CONSTRAINT payments_application_id_key UNIQUE (application_id);
ALTER TABLE ONLY public.payments
    ADD CONSTRAINT payments_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.rating_rounds
    ADD CONSTRAINT rating_rounds_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.rating_rounds
    ADD CONSTRAINT rating_rounds_prev_round_id_key UNIQUE (prev_round_id);
ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_message_id_key UNIQUE (message_id);
ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_round_id_application_id_created_by_key UNIQUE (round_id, application_id, created_by);
ALTER TABLE ONLY public.updates
    ADD CONSTRAINT updates_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.wordlist
    ADD CONSTRAINT wordlist_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.work_files
    ADD CONSTRAINT work_files_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.work_specification_mediums
    ADD CONSTRAINT work_specification_mediums_specification_id_medium_id_key UNIQUE (specification_id, medium_id);
ALTER TABLE ONLY public.work_specification_tags
    ADD CONSTRAINT work_specification_tags_pkey PRIMARY KEY (specification_id, tag_id);
ALTER TABLE ONLY public.works
    ADD CONSTRAINT works_application_id_portfolio_key UNIQUE (application_id, portfolio);
ALTER TABLE ONLY public.work_specification_mediums
    ADD CONSTRAINT works_mediums_pkey PRIMARY KEY (specification_id, medium_id);
ALTER TABLE ONLY public.works
    ADD CONSTRAINT works_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.work_specifications
    ADD CONSTRAINT works_specifications_pkey PRIMARY KEY (id);
CREATE INDEX applications_name_gin_idx ON public.applications USING gin (internal_name public.gin_trgm_ops);
CREATE OR REPLACE VIEW public.ratings_by_application AS
 SELECT a.id,
    a.edition_id,
    r.round_id,
    count(DISTINCT r.id) AS count,
    avg(r.value) AS avg,
    avg(r_total.value) AS avg_total
   FROM (((public.ratings r
     JOIN public.ratings r_total ON ((r_total.application_id = r.application_id)))
     FULL JOIN public.applications a ON ((r.application_id = a.id)))
     LEFT JOIN public.editions e ON ((a.edition_id = e.id)))
  WHERE ((e.current IS TRUE) AND (a.eliminated IS NOT TRUE))
  GROUP BY a.id, r.round_id
  ORDER BY r.round_id DESC, (count(DISTINCT r.id)), (abs(((5)::numeric - avg(r.value)))), (random());
  CREATE FUNCTION public.application_is_ready(application_row public.applications) RETURNS boolean
    LANGUAGE sql STABLE
    AS $$
    SELECT (application_row.disclaimer IS NOT FALSE AND
    (SELECT COUNT(*) FROM work_files f  WHERE f.application_id = application_row.id) > 0 AND
    (SELECT COUNT(*) FROM work_specifications s  WHERE s.application_id = application_row.id) > 0 AND
    (SELECT COUNT(*) FROM payments p  WHERE p.application_id = application_row.id) > 0 AND
    (application_row.statement <> '') IS NOT FALSE)
$$;
CREATE FUNCTION public.application_is_winner(application_row public.applications) RETURNS boolean
    LANGUAGE sql STABLE
    AS $$
SELECT EXISTS (
    SELECT 1
    FROM editions E
    WHERE E.winner_id = application_row.id
);
$$;
CREATE FUNCTION public.application_rated_by_user(application_row public.applications, hasura_session json) RETURNS boolean
    LANGUAGE sql STABLE
    AS $$
SELECT EXISTS (
    SELECT 1
    FROM ratings R
    WHERE 
        EXISTS (
            SELECT ID
            FROM rating_rounds RR
            WHERE  ID not IN 
            (
            SELECT  prev_round_id 
            FROM    rating_rounds
            WHERE   prev_round_id is not null
            ) AND ID = R.round_id
        ) AND
        R.created_by = hasura_session ->> 'x-hasura-user-id' AND
        R.application_id = application_row.id
);
$$;
CREATE FUNCTION public.application_state(application_row public.applications) RETURNS text
    LANGUAGE sql STABLE
    AS $$
    SELECT 
    CASE 
        WHEN
            (SELECT (application_row.disclaimer IS NOT TRUE AND
            (SELECT COUNT(*) FROM works w  WHERE w.application_id = application_row.id) <= 0 AND
            (SELECT COUNT(*) FROM payments p  WHERE p.application_id = application_row.id) <= 0 AND
            (application_row.statement <> '') IS NOT TRUE)) THEN
            'pristine'
        WHEN (SELECT COUNT(*) FROM works w  WHERE w.application_id = application_row.id) <= 0 THEN
            'no-works'
        WHEN (SELECT COUNT(*) FROM work_specifications s  WHERE s.application_id = application_row.id) <= 0 THEN
            'no-specifications'
        WHEN (SELECT COUNT(*) FROM work_files f  WHERE f.application_id = application_row.id) <= 0 THEN
            'no-files'
        WHEN (SELECT COUNT(*) FROM payments p  WHERE p.application_id = application_row.id) <= 0 THEN
            'not-payed'
        WHEN (SELECT (application_row.disclaimer IS NOT TRUE)) THEN
            'unapproved-disclaimer'
        WHEN ((application_row.statement <> '') IS NOT TRUE) THEN
            'no-statement'
        ELSE
            'complete'
    END
$$;
CREATE FUNCTION public.edition_state(edition_row public.editions) RETURNS text
    LANGUAGE sql STABLE
    AS $$
SELECT 
    CASE 
        WHEN (edition_row.application_start > now()) THEN
            'open'
        WHEN edition_row.application_start <= now() AND edition_row.application_end >= now() THEN
            'submission'
        WHEN edition_row.application_end < now() AND edition_row.winner_id IS NULL THEN
            'rating'
        WHEN edition_row.winner_id IS NOT NULL THEN
            'closed'
        ELSE
            'idle'
    END
$$;
CREATE FUNCTION public.get_alias() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    IF NEW.internal_name IS NULL THEN
        NEW.internal_name := get_random_word() || '-' || get_random_word() || '-' || get_random_word() || '-' || get_random_word();
    END IF;
    RETURN NEW;
END
$$;
CREATE FUNCTION public.get_random_word() RETURNS text
    LANGUAGE sql
    AS $$
SELECT value FROM wordlist 
WHERE id = (
  SELECT width_bucket(random(), 0::float8, 1::float8, (SELECT max(id) FROM wordlist))
);
$$;
CREATE TRIGGER get_alias_trigger BEFORE INSERT OR UPDATE ON public.applications FOR EACH ROW EXECUTE FUNCTION public.get_alias();
CREATE TRIGGER set_public_applications_updated_at BEFORE UPDATE ON public.applications FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_applications_updated_at ON public.applications IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_rating_rounds_updated_at BEFORE UPDATE ON public.rating_rounds FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_rating_rounds_updated_at ON public.rating_rounds IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_ratings_updated_at BEFORE UPDATE ON public.ratings FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_ratings_updated_at ON public.ratings IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_users_last_seen BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_last_seen();
COMMENT ON TRIGGER set_public_users_last_seen ON public.users IS 'trigger to set value of column "last_seen" to current timestamp on row update';
CREATE TRIGGER set_public_works_specifications_updated_at BEFORE UPDATE ON public.work_specifications FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_works_specifications_updated_at ON public.work_specifications IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_works_updated_at BEFORE UPDATE ON public.works FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_works_updated_at ON public.works IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.applications
    ADD CONSTRAINT applications_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.applications
    ADD CONSTRAINT applications_edition_id_fkey FOREIGN KEY (edition_id) REFERENCES public.editions(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public.editions
    ADD CONSTRAINT editions_winner_id_fkey FOREIGN KEY (winner_id) REFERENCES public.applications(id) ON UPDATE SET NULL ON DELETE SET NULL;
ALTER TABLE ONLY public.eliminations
    ADD CONSTRAINT eliminations_application_id_fkey FOREIGN KEY (application_id) REFERENCES public.applications(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.eliminations
    ADD CONSTRAINT eliminations_eliminated_by_fkey FOREIGN KEY (created_by) REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.eliminations
    ADD CONSTRAINT eliminations_round_id_fkey FOREIGN KEY (round_id) REFERENCES public.rating_rounds(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_application_id_fkey FOREIGN KEY (application_id) REFERENCES public.applications(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_round_id_fkey FOREIGN KEY (round_id) REFERENCES public.rating_rounds(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.payments
    ADD CONSTRAINT payments_application_id_fkey FOREIGN KEY (application_id) REFERENCES public.applications(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.rating_rounds
    ADD CONSTRAINT rating_rounds_edition_id_fkey FOREIGN KEY (edition_id) REFERENCES public.editions(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.rating_rounds
    ADD CONSTRAINT rating_rounds_prev_round_id_fkey FOREIGN KEY (prev_round_id) REFERENCES public.rating_rounds(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_application_id_fkey FOREIGN KEY (application_id) REFERENCES public.applications(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_message_id_fkey FOREIGN KEY (message_id) REFERENCES public.messages(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_round_id_fkey FOREIGN KEY (round_id) REFERENCES public.rating_rounds(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.updates
    ADD CONSTRAINT updates_edition_id_fkey FOREIGN KEY (edition_id) REFERENCES public.editions(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.work_files
    ADD CONSTRAINT work_files_application_id_fkey FOREIGN KEY (application_id) REFERENCES public.applications(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.work_files
    ADD CONSTRAINT work_files_work_id_fkey FOREIGN KEY (work_id) REFERENCES public.works(id) ON UPDATE SET NULL ON DELETE SET NULL;
ALTER TABLE ONLY public.work_specification_tags
    ADD CONSTRAINT work_specification_tags_specification_id_fkey FOREIGN KEY (specification_id) REFERENCES public.work_specifications(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.work_specification_tags
    ADD CONSTRAINT work_specification_tags_tag_id_fkey FOREIGN KEY (tag_id) REFERENCES public.category_tags(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.work_specifications
    ADD CONSTRAINT work_specifications_application_id_fkey FOREIGN KEY (application_id) REFERENCES public.applications(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.work_specifications
    ADD CONSTRAINT work_specifications_work_id_fkey FOREIGN KEY (work_id) REFERENCES public.works(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.works
    ADD CONSTRAINT works_application_id_fkey FOREIGN KEY (application_id) REFERENCES public.applications(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.work_specification_mediums
    ADD CONSTRAINT works_mediums_medium_id_fkey FOREIGN KEY (medium_id) REFERENCES public.category_mediums(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.work_specification_mediums
    ADD CONSTRAINT works_mediums_specification_id_fkey FOREIGN KEY (specification_id) REFERENCES public.work_specifications(id) ON UPDATE CASCADE ON DELETE CASCADE;
