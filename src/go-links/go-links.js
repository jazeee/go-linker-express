class GoLinks {
	constructor() {
		this.links = new Map();
	}
	set = (name, path) => {
		if (!name || !path) {
			throw new Error('Must provide name and path');
		}
		this.links.set(name, path);
	}
	delete = (name) => {
		if (!name) {
			throw new Error('Must provide name');
		}
		this.links.delete(name);
	}
}

export {GoLinks};
