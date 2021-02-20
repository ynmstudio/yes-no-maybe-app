ALTER TABLE "public"."editions" ADD COLUMN "winner" uuid;
ALTER TABLE "public"."editions" ALTER COLUMN "winner" DROP NOT NULL;
ALTER TABLE "public"."editions" ADD CONSTRAINT editions_winner_fkey FOREIGN KEY (winner) REFERENCES "public"."applications" (id) ON DELETE restrict ON UPDATE restrict;
ALTER TABLE "public"."editions" ADD CONSTRAINT editions_winner_key UNIQUE (winner);
