CREATE TABLE product (
	id serial4 NOT NULL,
	"productCode" varchar NULL,
	"productName" varchar NULL,
	created date NULL DEFAULT now(),
	active bool NULL,
	CONSTRAINT product_pk PRIMARY KEY (id)
);

CREATE TABLE sal (
	"productId" int4 NOT NULL,
	created date NULL DEFAULT now(),
	quantity int4 NOT NULL
);

CREATE TABLE inventory (
	productid int4 NOT NULL,
	threshold int4 NOT NULL,
	stock int4 NOT NULL,
	updated date NULL DEFAULT now(),
	CONSTRAINT inventory_pk PRIMARY KEY (productid)
);

INSERT INTO public.inventory (productid,threshold,stock,updated) VALUES
	 (1,50,100,'2024-01-29');

INSERT INTO public.product ("productCode","productName",created,active) VALUES
	 ('002','Tv','2024-01-29',true),
	 ('001','Cellphone','2024-01-28',false);

INSERT INTO public.sale ("productId",created,quantity) VALUES
	 (1,'2024-01-29',20)
