var layoutManager = {
	createJobCell: function(title, printer, duration, completion) {
		var div = document.createElement('div');
		div.className = 'job-cell';
		var titleDiv = document.createElement('div');
		titleDiv.className = 'title';
		titleDiv.innerHTML = title;
		var printerDiv = document.createElement('a');
		printerDiv.setAttribute('href', '#');
		printerDiv.innerHTML = printer;

		var timeDiv = document.createElement('span');
		timeDiv.className = 'subtext';
		var hours = parseInt(duration / 3600, 10);
		duration -= hours * 3600;
		var min = parseInt(duration / 60, 10);
		duration -= min * 60;
		var seconds = parseInt(duration, 10);
		timeDiv.innerHTML = hours+ 'hrs ' + min + 'min ' + seconds + 'sec';

		var progress = document.createElement('div');
		progress.className = 'progress animate';

		var currProgress = document.createElement('span');
		currProgress.className = 'progressBar';
		var progressNum = parseInt(Math.random() * (100), 10);
		currProgress.style.width = progressNum + '%';
		currProgress.appendChild(document.createElement('span'));

		var innerText = document.createElement('span');
		innerText.innerHTML = progressNum + '%';
		innerText.className = 'percentComplete';
		progress.appendChild(innerText);

		progress.appendChild(currProgress);

		div.appendChild(titleDiv);
		div.appendChild(printerDiv);
		div.appendChild(timeDiv);
		div.appendChild(progress);

		return div;
	}
};