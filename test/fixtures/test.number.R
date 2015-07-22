options( digits = 16 );
library( jsonlite );
library( bda )

mu = 0
b = 1
probs = c( 0, 0.25, 0.5, 0.75, 1 )
y = qlap( probs, mu, 1/b )

cat( y, sep = ",\n" )

data = list(
	mu = mu,
	b = b,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/number.json" )
