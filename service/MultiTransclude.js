angular.module('mtApp').factory('MultiTransclude',function() {
	return {

		transclude: function(elem, transcludeFn) {
			transcludeFn(function (clone) {
				angular.forEach(clone, function (cloneEl) {

					function isElement(obj) {
					  try {
					    //Using W3 DOM2 (works for FF, Opera and Chrom)
					    return obj instanceof HTMLElement;
					  }
					  catch(e){
					    //Browsers not supporting W3 DOM2 don't have HTMLElement and
					    //an exception is thrown and we end up here. Testing some
					    //properties that all elements have. (works on IE7)
					    return (typeof obj==="object") &&
					      (obj.nodeType===1) && (typeof obj.style === "object") &&
					      (typeof obj.ownerDocument ==="object");
					  }
					}

					if(isElement(cloneEl)) {
					  // get desired target ID
					  var tId = cloneEl.attributes["transclude-to"].value;

					  // find target element with that ID
					  var target = elem.find("[transclude-id=" + tId + "]");

					  // append element to target
					  target.append(cloneEl);

					  if (target.length) {
						target.append(cloneEl);
					  } else {
						cloneEl.remove();
						throw new Error(
						  "Target not found. Please specify the correct transclude-to attribute."
						);
					  }
				}

				});
			});
		}

	};
});
