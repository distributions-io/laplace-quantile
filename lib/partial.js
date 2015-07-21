'use strict';

// FUNCTIONS //// MODULES //

var sgn = require( 'compute-signum/lib/number.js' );


// FUNCTIONS //

var abs = Math.abs,
	ln = Math.log;


// PARTIAL //

/**
* FUNCTION: partial( mu, b )
*	Partially applies location parameter `mu` and scale parameter `b` and returns a function for evaluating the quantile function for a Laplace distribution.
*
* @param {Number} mu - location parameter
* @param {Number} b - scale parameter
* @returns {Function} quantile function
*/
function partial( mu, b ) {

	/**
	* FUNCTION: quantile( p )
	*	Evaluates the quantile function for a Laplace distribution.
	*
	* @private
	* @param {Number} p - input value
	* @returns {Number} evaluated quantile function
	*/
	return function quantile( p ) {
		if ( p !== p || p < 0 || p > 1 ) {
			return NaN;
		}
		return mu - b * sgn( p - 0.5 ) * ln( 1 - 2 * abs( p - 0.5 ) );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
