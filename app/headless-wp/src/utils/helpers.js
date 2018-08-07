export function goToMovie(event) {

	const { top, right, bottom, left, width, height } = event.target.parentElement.getBoundingClientRect();

	const imgUrl = event.target.parentElement.attributes.image.value;

	this.props.history.push({
	  pathname: '/movies/'+event.target.parentElement.id, 
	  state: {
	    to: 'modal',
	    meta: {
	      from: { top, right, bottom, left, width, height },
	      image: imgUrl
	    }
	  }
	});
};

export function goBack() {
	this.props.history.goBack();
};