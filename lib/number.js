'use strict';

// MODULES //

var sgn = require( 'compute-signum/lib/number.js' );


// FUNCTIONS //

var abs = Math.abs,
	ln = Math.log;
	

// QUANTILE //

/**
* FUNCTION: quantile( p, mu, b )
*	Evaluates the quantile function for a Laplace distribution with location parameter `mu` and scale parameter `b` at a probability `p`.
*
* @param {Number} p - input value
* @param {Number} mu - location parameter
* @param {Number} b - scale parameter
* @returns {Number} evaluated quantile function
*/
function quantile( p, mu, b ) {
	if ( p !== p || p < 0 || p > 1 ) {
		return NaN;
	}
	return mu - b * sgn( p - 0.5 ) * ln( 1 - 2 * abs( p - 0.5 ) );
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
