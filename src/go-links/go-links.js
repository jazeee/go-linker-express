class GoLinks {
	constructor() {
		this.links = new Map();
	}
	get = (name) => {
		if (!name) {
			throw new Error('Must provide name');
		}
		return this.links.get(name);
	}
	set = (name, path) => {
		if (!name || !path) {
			throw new Error('Must provide name and path');
		}
		this.links.set(name, path);
		return name;
	}
	delete = (name) => {
		if (!name) {
			throw new Error('Must provide name');
		}
		this.links.delete(name);
	}
	toArray = () => {
		return [...this.links.keys()].map( (name) => {
			const url = this.links.get(name);
			return {name, url};
		});
	}
}

export {GoLinks};
