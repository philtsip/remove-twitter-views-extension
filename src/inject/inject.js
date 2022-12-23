(function() {
	const interval = setInterval(function() {
		document.querySelectorAll('a[href$="/analytics"]').forEach(function(a) {
		  a.parentElement.remove();
		})
	  }, 1000)
})()