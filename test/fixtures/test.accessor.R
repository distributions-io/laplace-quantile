options( digits = 16 )
library( jsonlite )
library( bda )

mu = -10
b = 10
probs = seq( 0, 1, 0.01 )
y = qlap( probs, mu, 1/b )

cat( y, sep = ",\n" )

data = list(
	mu = mu,
	b = b,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/accessor.json" )
