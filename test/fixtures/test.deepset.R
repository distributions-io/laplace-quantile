options( digits = 16 );
library( jsonlite );


mu = 0
b = 1
probs = seq( 0, 1, 0.1 )
y = qlap( probs, mu, b )

cat( y, sep = ",\n" )

data = list(
	mu = mu,
	b = b,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/deepset.json" )
