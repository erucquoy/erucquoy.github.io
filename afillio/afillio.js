function affilioShowBox() {
	swal({
		title: 'Input email address',
		input: 'email'
		}).then(function (email) {
			swal({
				type: 'success',
				html: 'Entered email: ' + email
			})
	})
};

var pluginDiv = document.createElement('div');

pluginDiv.style.cssText = 'position: absolute; right: 0px; top: 100px; background-color: blue;color: white;padding-top: 10px;padding-left: 10px;padding-bottom: 10px;padding-right: 10px;';

pluginDiv.innerHTML = 'Content (click for test)';

document.body.appendChild(pluginDiv);

pluginDiv.addEventListener("click", afillio.affilioShowBox, false);




