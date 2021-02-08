ALTER TABLE "public"."wordlist" ADD COLUMN "id" int4;
ALTER TABLE "public"."wordlist" ALTER COLUMN "id" DROP NOT NULL;
ALTER TABLE "public"."wordlist" ALTER COLUMN "id" SET DEFAULT nextval('wordlist_id_seq'::regclass);
