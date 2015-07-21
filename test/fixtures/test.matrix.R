options( digits = 16 );
library( jsonlite );

mu = 0
b = 1
probs = 0:24 / 25
y = qlap( probs, mu, b )

cat( y, sep = ",\n" )

data = list(
	mu = mu,
	b = b,
	data = probs,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
